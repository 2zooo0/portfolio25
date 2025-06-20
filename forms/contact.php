<!-- <?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  // $receiving_email_address = '0705jy@naver.com';

  // if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
  //   include( $php_email_form );
  // } else {
  //   die( 'Unable to load the "PHP Email Form" Library!');
  // }

  // $contact = new PHP_Email_Form;
  // $contact->ajax = true;
  
  // $contact->to = $receiving_email_address;
  // $contact->from_name = $_POST['name'];
  // $contact->from_email = $_POST['email'];
  // $contact->subject = $_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */


  $contact->add_message( $_POST['name'], 'From');
  $contact->add_message( $_POST['email'], 'Email');
  $contact->add_message( $_POST['message'], 'Message', 10);

  echo $contact->send();
?> -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "0705jy@naver.com"; // 🔔 여기에 너 이메일
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $subject = htmlspecialchars($_POST["subject"]);
  $message = htmlspecialchars($_POST["message"]);

  $email_content = "From: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  $headers = "From: $name <$email>";

  if (mail($to, $subject, $email_content, $headers)) {
    http_response_code(200);
    echo "Message sent successfully!";
  } else {
    http_response_code(500);
    echo "Failed to send message.";
  }
} else {
  http_response_code(403);
  echo "There was a problem with your submission.";
}
?>
