<?php
if (isset($_POST)){
    function simple_validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $vname = simple_validate($_POST['name']);
    $vemail = simple_validate($_POST['email']);
    $vsubject = simple_validate($_POST['subject']);
    $vmessage = simple_validate($_POST['message']);
    
    $xemail = "rolandwebdeveloper@gmail.com";
    $xname = "Admin";
    $zemail = "rolandwebdeveloper@gmail.com";
    $zname = "Admin";
    require_once 'includes/class.phpmailer.php';
    require_once 'includes/class.smtp.php';
    $message = file_get_contents('includes/mail.html');
    $message = str_replace('%vname%', $vname, $message);
    $message = str_replace('%vsubject%', $vsubject, $message);
    $message = str_replace('%vemail%', $vemail, $message);
    $message = str_replace('%vmessage%', $vmessage, $message);
    $mail = new PHPMailer;
    $mail->isSendmail();
    $mail->setFrom($vemail, $vname);
    $mail->addReplyTo($vemail, $vname);
    $mail->addAddress($xemail, $xname);
    $mail->addCC($zemail, $zname);
    $mail->Subject = $vsubject;
    $mail->msgHTML($message);
    $mail->AltBody = $vsubject;
    if (!$mail->send()) {

        echo "An error has occured.";
    }
?>
<?php include 'include/header.php'; ?>
<div class="row">
    <h2>Thank you for your enquiry. We will get back to you shortly.</h2>
</div>
<?php include 'include/footer.php'; ?>
<?php
}
?>