<?php
require 'PHPMailerAutoload.php';

function sendMail($to, $subject, $message) 
{
	$mail = new PHPMailer;
	
	$mail->Host = 'server2.ahost.uz';  				// Название сервера можете узнать в личном кабинете на странице управления услугой.
	$mail->Username = 'info@booknomy.uz';       		// Почтовый ящик (e-mail), созданный в cPanel -> Учетные записи почты.
	$mail->Password = '%S)9]N;Qsjik';                 	// Пароль от созданного почтового ящика.
	$fromName = '';									// Имя отправителя сообщения, можно оставить пустым.
	
	$mail->isSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;	
	$mail->setFrom($mail->Username, $fromName);
	$mail->addAddress($to);
	$mail->isHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Subject = $subject;
	$mail->Body    = $message;
	$mail->AltBody = strip_tags($message);
	
	return $mail->send();
}