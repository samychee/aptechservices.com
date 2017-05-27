<html>
<head><title>PHP Mail Sender</title></head>
<body>
<?php

if(isset($_POST["sendMail"]))
{

/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
$email = $HTTP_POST_VARS['email'];
$subject = $HTTP_POST_VARS['subject'];
$message = $HTTP_POST_VARS['message'];
$from = "webmaster@aptechservices.com"; // Replace this with one of your domain email address with a mailbox.

$email=$email.",".$from;

/* PHP form validation: the script checks that the Email field contains a valid email address and the Subject field isn't empty. preg_match performs a regular expression match. It's a very powerful PHP function to validate form fields and other strings - see PHP manual for details. */
if (!preg_match("/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/", $email)) 
{
  echo "<h4>Invalid email address</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a>";
} 
elseif ($subject == "") 
{
  echo "<h4>No subject</h4>";
  echo "<a href='javascript:history.back(1);'>Back</a>";
}

/* Sends the mail and outputs the "Thank you" string if the mail is successfully sent, or the error string otherwise. */

elseif (mail($email,$subject,$message)) 
{
  echo "<h4>Thank you for sending email</h4>";
}
else 
{
  echo "<h4>Can't send email to $email</h4>";
}
}
else
{
 ?>

<!-- <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST"> -->
<form action="testingmail.php" method="POST">
<b>Email</b><br>
<input type="text" name="email" size=40>
<p><b>Subject</b><br>
<input type="text" name="subject" size=40>
<p><b>Message</b><br>
<textarea cols=40 rows=10 name="message"></textarea>
<p><input type="submit" value=" Send " name = "sendMail">
</form>

<?php
}
?> 

</body>
</html>
