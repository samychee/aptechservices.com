<?php
function checkOK($field)
{
  if (eregi("\r",$field) || eregi("\n",$field))
  {
    die("Invalid Input!");
  }
}

$first_name=$_POST['firstName'];
checkOK($first_name);
$last_name=$_POST['lastName'];
checkOK($last_name);
$salute=$_POST['salute'];
checkOK($salute);
$position=$_POST['position'];
checkOK($position);
$company=$_POST['companyName'];
checkOK($company);
$street=$_POST['streetName'];
checkOK($street);
$street2=$_POST['streetName2'];
checkOK($street);
$city=$_POST['cityName'];
checkOK($city);
$state=$_POST['stateName'];
checkOK($state);
$zip=$_POST['zipCode'];
checkOK($zip);
$country=$_POST['countryName'];
checkOK($country);
$phone_area=$_POST['phoneArea'];
checkOK($phone_area);
$phone_number=$_POST['phoneNumber'];
checkOK($phone_number);
$fax_area=$_POST['faxArea'];
checkOK($fax_area);
$fax_number=$_POST['faxNumber'];
checkOK($fax_number);
$email=$_POST['eMail'];
checkOK($email);
$email_confirm=$_POST['eMailConfirm'];
checkOK($email_confirm);
$url=$_POST['websiteURL'];
checkOK($url);
$reference=$_POST['referenced'];
checkOK($reference);
$product=$_POST['productInterested'];
checkOK($product);
$content=$_POST['mailContent'];
checkOK($content);
$subject=$_POST['subject'];
checkOK($subject);
$to="webmaster@aptechservices.com";
$message="Name    :     $salute $first_name $last_name\n";
if ($position != "")
  $message.="Position:     $position\n";
$message.="Company :     $company\nAddress :     $street";
if ($street2 != "")
  $message.=", $street2";
$message.=", $city, $state $zip, $country\nTel     :     $phone_area-$phone_number\nFax     :     $fax_area-$fax_number\nEmail   :     $email\nEmail   :     $email_confirm\n";
if ($url != "")
  $message.="Website :     $url\n";
if ($reference != "")
  $message.="Referred:     $reference\n";
$message.="Product :     $product\n";
if ($content != "")
  $message.="Contents:     $content";
if(mail($to, $subject, $message, "From: webmaster@aptechservices.com")) {
  echo "<h4>Dear $salute $first_name $last_name, Thanks for your request. We'll response you soon.</h4>";
  echo "<h4><a href='http://www.aptechservices.com'>Go to Home Page</a></h4>";
  echo "<h4><a href='javascript:history.back(1);'>Back</a></h4>";
} else {
  echo "<h4>Dear $salute $first_name $last_name, There was a problem sending the mail. Please go to the previous page and check that you filled in the form correctly and try again.</h4>";
  echo "<h4><a href='javascript:history.back(1);'>Back</a></h4>";
}
?>

