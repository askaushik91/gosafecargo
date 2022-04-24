<?php

if ( $_POST ) {
  //$to = "kaushik.ashish91@outlook.com"; // your mail here
  $to = "kaushik.ashish91@outlook.com"; // your mail here
  $subject = "Service Request from Digito Mentors"; // your mail here
  $fullName = filter_var( $_POST[ "fullName" ], FILTER_SANITIZE_STRING );
  $mobNumber = filter_var( $_POST[ "mobNumber" ], FILTER_SANITIZE_STRING );
  $fromLoc = filter_var( $_POST[ "fromLoc" ], FILTER_SANITIZE_STRING );
  $toLoc = filter_var( $_POST[ "toLoc" ], FILTER_SANITIZE_STRING );
  $body = "Name: $fullName\nMobile: $mobNumber\nFrom: $fromLoc\nTo: $toLoc";
  


  //mail headers are mandatory for sending email
  $headers = 'From: ' . $email . "\r\n" .
  'Reply-To: ' . $email . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

  if ( @mail( $to, $subject, $body, $headers ) ) {
    $output = json_encode( array( 'success' => true ) );
    die( $output );
  } else {
    $output = json_encode( array( 'success' => false ) );
    die( $output );
  }
}