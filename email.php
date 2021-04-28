<?php

$destinatario = 'contacto@soypacosantos.mx';
// esto es al correo al que se enviara el mensaje

$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];
$numero = $_POST['numero'];


$header = "enviado desde la pagina soypacosantos";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nEmail: " . $email . "\nNumero" . $numero;

mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('Datos enviados exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>