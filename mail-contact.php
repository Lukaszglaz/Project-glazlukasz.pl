<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST["first_name"]);
    $last_name = htmlspecialchars($_POST["last_name"]);
    $from = htmlspecialchars($_POST["email"]);
    $subject = "Message from Website: glazlukasz.pl";
    $to = "kontakt@glazlukasz.pl";
    $message = htmlspecialchars($_POST["message"]);

    $txt = "First Name: " . $first_name . "\r\n" .
           "Last Name: " . $last_name . "\r\n" .
           "Email: " . $from . "\r\n" . "\r\n" .
           "Message: " . $message;
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Wysłanie e-maila
    if (mail($to, $subject, $txt, $headers)) {
        header("Location: /index.html?mail_status=sent");
        exit(); 
    } else {
        header("Location: /index.html?mail_status=error");
        exit(); 
    }
} else {
    header("Location: /index.html");
    exit(); 
}
?>
