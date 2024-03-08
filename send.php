<?php

if(isset($_POST['submit'])) {
  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Email setup
  $to = 'akacharbet@gmail.com';
  $subject = 'New Contact Form Submission';
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $name <$email>\r\n";

  // Email body
  $body = "Name: $name\n";
  $body .= "Email: $email\n";
  $body .= "Message:\n$message";

  // Send email
  if(mail($to, $subject, $body, $headers)) {
    echo "Thank you for contacting us!";
  } else {
    echo "Sorry, there was an error sending your message.";
  }
}

?>
