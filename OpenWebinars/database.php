<?php
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_de_datos = "hotelreservas";

$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos);

if ($conexion->connect_error) {
    sleep(3);
    die("Error al conectar amb la base de dades: " . $conexion->connect_error);
}

$conexion->set_charset("utf8");
?>
