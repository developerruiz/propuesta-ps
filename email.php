<?php

$destinatario = 'contacto@soypacosantos.com';
// esto es al correo al que se enviara el mensaje

$email = $_POST['email'];
$header = "enviado desde la pagina de SoyPacoSantos";
$mensajeCompleto = "\nEmail: " . $email;

mail($destinatario, $header);
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>