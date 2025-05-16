<html>
<head> <link rel='stylesheet' href='index.css'></head>
</html>

<?php
include("database.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $fecha_entrada = $_POST["entrada"];
    $fecha_salida = $_POST["salida"];
    $habitacion = $_POST["habitacion"];

    $sql = "INSERT INTO reservas (nombre, email, entrada, salida, habitacion_id) 
            VALUES (?, ?, ?, ?, ?)";

    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssssi", $nombre, $email, $fecha_entrada, $fecha_salida, $habitacion);

    if ($stmt->execute()) {
        header("Refresh: 3; url=index.html");
        echo "<p>Reserva guardada correctament</p>";
    } else {
        header("Refresh: 3; url=form.html");
        echo "<p>Error al guardar la reserva</p>";
        echo "<p>" . $stmt->error . "</p>";
    }

    $stmt->close();
    $conexion->close();
} else {
    echo "<p>Omple el formulari primer</p>";
    header("Refresh: 3; url=form.html");
}
?>

