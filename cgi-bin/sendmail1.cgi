#!/usr/bin/perl

use CGI;

my $sendmail = "/usr/sbin/sendmail";
my $emailConfPath = "/cgi-bin/sendmail1.conf";
my $query = new CGI;

my $firstname = &veryclean($query->param('firstName'));
my $lastname = &veryclean($query->param('lastName'));
my $salute = &veryclean($query->param('salute'));
my $position = &veryclean($query->param('position'));
my $company = &veryclean($query->param('companyName'));
my $street1 = &veryclean($query->param('streetName'));
my $street2 = &veryclean($query->param('streetName2'));
my $city = &veryclean($query->param('cityName'));
my $state = &veryclean($query->param('stateName'));
my $zip = &veryclean($query->param('zipCode'));
my $country = &veryclean($query->param('countryName'));
my $phonearea = &veryclean($query->param('phoneArea'));
my $phoneno = &veryclean($query->param('phoneNumber'));
my $faxarea = &veryclean($query->param('faxArea'));
my $faxno = &veryclean($query->param('faxNumber'));
my $email = &veryclean($query->param('eMail'));
my $emailconfirm = &veryclean($query->param('eMailConfirm'));
my $website = &veryclean($query->param('websiteURL'));
my $reference = &veryclean($query->param('referenced'));
my $product = &veryclean($query->param('productInterested'));
my $content = &veryclean($query->param('mailContent'));
my $recipient = &veryclean($query->param('RCPT'));
my $subject = &veryclean($query->param('subject'));

if (($firstname eq "") || ($email eq "") || ($product eq ""))
{
	&error("You're almost there but missing some fields",
		"Please fill out your name, email, and products you like. <a href='javascript: history.back()'>Back up</a> to the " .
		"previous page to try again.");
}

if (!open(IN, "$emailConfPath")) 
{
	&error("Configuration Error",
		"The file $emailConfPath does not exist or cannot be " .
		"opened. Please read the documentation before installing " .
		"sendmail.cgi.");
}

my $returnpage;

my $ok = 0;
while (1) 
{
	my $recipientc = <IN>;
	$recipientc =~ s/\s+$//;
	if ($recipientc eq "") {
		last;
	}
	my $returnpagec = <IN>;
	$returnpagec =~ s/\s+$//;
	if ($returnpagec eq "") {
		last;
	}
	if ($recipientc eq $recipient) {
		$ok = 1;
		$returnpage = $returnpagec;
		last;
	}
}
close(IN);
if (!$ok) 
{
	&error("Email Rejected",
		"The requested destination address is not one of " .
		"the permitted email recipients. Please read the " .
		"documentation before installing sendmail.cgi.");
}

open(OUT, "|$sendmail -t");
print OUT <<EOM
To: $recipient
Subject: $subject
Reply-To: $email
Supposedly-From: $name


Name       : $salute $firstname $lastname
Position   : $position
Company    : $company
Address    : $street1 $street2, $city, $state $zip, $country
Phone      : $phonearea-$phoneno
Fax        : $faxarea-$faxno
Email      : $email
Email      : $emailconfirm
Website    : $website
Reference  : $reference
Products   : $product
Content    : $content
EOM
;
close(OUT);
print $query->redirect($returnpage);

exit 0;

sub clean
{
	my $s = shift @_;
	$s =~ s/^\s+//;
	$s =~ s/\s+$//;
	return $s;
}

sub veryclean
{
	my $s = shift @_;
	$s = &clean($s);
	$s =~ s/\s+$/ /g;
	return $s;
}

sub error
{
	my($title, $content) = @_;
	print $query->header;
	print <<EOM
<html>
<head>
<title>$title</title>
</head>
<body>
<h1 align="center">$title</h1>
<p>
$content
</p>
EOM
;
	exit 0;
}

