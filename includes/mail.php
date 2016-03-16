<?php

include 'functions.php';

if (!empty($_POST)){

  $data['success'] = true;
  $_POST  = multiDimensionalArrayMap('cleanEvilTags', $_POST);
  $_POST  = multiDimensionalArrayMap('cleanData', $_POST);

  //your email adress 
  $emailTo ="rolandwebdeveloper@gmail.com"; //"yourmail@yoursite.com";

  //from email adress
  //$emailFrom ="contact@yoursite.com"; //"contact@yoursite.com";

  //email subject
  /*$emailSubject = "Mail from rparado.github.io";*/

  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comment = $_POST["message"];
  if($name == "")
   $data['success'] = false;
 
 if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) 
   $data['success'] = false;


 if($comment == "")
   $data['success'] = false;

 if($data['success'] == true){

  $message = "NAME: $name<br>
  EMAIL: $email<br>
  COMMENT: $comment";


  $headers = "MIME-Version: 1.0" . "\r\n"; 
  $headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
  $headers .= "From: <$email>" . "\r\n";
  mail($emailTo, $subject, $message, $headers);

  $data['success'] = true;
  echo json_encode($data);
}
}