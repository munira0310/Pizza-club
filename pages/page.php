
<?php
require_once "phpmailer/phpmailer.php";
$mail = new PHPMailer;
$mail->Host = 'server2.ahost.uz';                    // Название сервера можете узнать в личном кабинете на странице управления услугой.
$mail->Username = 'info@booknomy.uz';          // Почтовый ящик (e-mail), созданный в cPanel -> Учетные записи почты.
$mail->Password = '%S)9]N;Qsjik';                            // Пароль от созданного почтового ящика.
$fromName = 'Заказ с сайта http://booknomy.uz/';


$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$radio =  $_POST['radio'];
$radio1 = $_POST['radio1'];
$radio2 = $_POST['radio2'];
$radio3 = $_POST['radio3'];
$radio4 = $_POST['radio4'];
$radio5 = $_POST['radio5'];


require_once "phpmailer/phpmailer.php";
 $mail = new PHPMailer;
 $mail->CharSet = 'utf-8';

 $mail->isSMTP();
 $mail->Host = 'server2.ahost.uz';
 $mail->SMTPAuth = true;
 $mail->Username = 'info@booknomy.uz';
 $mail->Password = '%S)9]N;Qsjik';
 $mail->SMTPSecure = 'ssl';
 $mail->Port = 465;
 $mail->setFrom('info@booknomy.uz');
 $mail->addAddress('buzbekistan@yandex.com');
  $mail->addAddress('booknomyuz20@gmail.com');
 $mail->isHTML(true);
 $mail->Subject = 'Заявка с сайта booknomy.uz';
 $mail->Body    = ' Имя: '.$name .' <br> Телефон: '.$phone.'<br>  Тип: '.'<br>'. $radio ."  ".$radio1."   ".$radio2."   ".$radio3."   ".$radio4."   ".$radio5;
 $mail->AltBody = '';







if($name !="" ){






            $url = "http://185.200.242.53/getdata.php?name=$name&phone=$phone&radio=$radio&radio1=$radio1&radio2=$radio2&radio3=$radio3&radio3=$radio3&radio4=$radio4&radio5=$radio5";
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, preg_replace("/ /", "%20", $url));
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
            $data = curl_exec($ch);
            curl_close($ch);




}
 if(!$mail->send()) {
   // header('location: thank-you.html');
 }  else {
    // header('location: thank-you.html');
 }

 ?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Thank you page</title>
    <meta name="theme-color" content="#c9e0e04d">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="shortcut icon" href="../img/favicons/favicon.ico" type="image/x-icon">
    <link rel="icon" sizes="16x16" href="../img/favicons/favicon-16x16.png" type="image/png">
    <link rel="icon" sizes="32x32" href="../img/favicons/favicon-32x32.png" type="image/png">
    <link rel="apple-touch-icon-precomposed" href="../img/favicons/apple-touch-icon-precomposed.png">
    <link rel="apple-touch-icon" href="../img/favicons/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="../img/favicons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../img/favicons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../img/favicons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../img/favicons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../img/favicons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../img/favicons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../img/favicons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../img/favicons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="167x167" href="../img/favicons/apple-touch-icon-167x167.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../img/favicons/apple-touch-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="1024x1024" href="../img/favicons/apple-touch-icon-1024x1024.png">
    <link rel="stylesheet" href="../styles/main.css">
    <link href="../fonts/all.min.css" rel="stylesheet">
</head>
<body>
<div class="thank">
    <div class="col-md-10 h-100 d-flex-sm-column-start">

        <div class="thank-col offset-md-2 offset-sm-1">
            <p class="thank-title d-block d-sm-none">
                Tabriklaymiz!
            </p>

            <p class="thank-text">
                    <span>
                        Siz ro`yxatdan muvaffaqiyatli o`tdingiz!
                    </span>
            </p>

            <p class="thank-weConnect d-none d-sm-block">
                SIZ BILAN TEZ ORADA BOG`LANAMIZ !
            </p>


            <div class="thank-social mt-xxl-6">
                <a href="https://www.instagram.com/booknomy_uz/" class="thank-social-link">
                    <img class="thank-social-link_icon mr-4" src="../img/svg/instagram-thank-page.svg" alt="instagram">
                </a>
                <a href="https://t.me/booknomy" class="thank-social-link">
                    <img class="thank-social-link_icon mr-4" src="../img/svg/telegram-thank-page.svg" alt="telegram">
                </a>
                <a href="https://www.facebook.com/booknomy" class="thank-social-link">
                    <img class="thank-social-link_icon mr-4" src="../img/svg/facebook-thank-page.svg" alt="facebook">
                </a>
                <a href="https://www.youtube.com/channel/UCzdXAoDNOm7t-yALRCIWZxA" class="thank-social-link">
                    <img class="thank-social-link_icon" src="../img/svg/youtube-thank-page.svg" alt="youtube">
                </a>
            </div>

            <p class="thank-weConnect d-block d-sm-none">
                SIZ BILAN TEZ ORADA BOG`LANAMIZ !
            </p>
        </div>

        <a href="/" class="back-page text-decoration-none offset-md-2 offset-sm-1">
            <i class="fas fa-long-arrow-left mr-3"></i>

            <p class="back-page_text mb-0">Orqaga qaytish</p>
        </a>
    </div>
</div>

<a href="/" class="back-page-mobile d-flex d-sm-none text-decoration-none">
    <i class="fas fa-long-arrow-left mr-3"></i>

    <p class="back-page_text mb-0">Orqaga qaytish</p>
</a>
<script src="../js/main.js"></script>
<script src="../js/vendor.js"></script>
</body>
</html>
