<?php
// Host Connection
$connection = mysqli_connect("localhost", "root", "")
    or die("Fatal error 404: Localhost Conection");

// DB connection
$bd = mysqli_select_db($connection, "mtd")
    or die("Fatal error 015: DB error");

?>
