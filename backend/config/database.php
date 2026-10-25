<?php

$host = "localhost";
$username = "root";
$password = "";
$database = "ecommerce_db";

try {
    $conn = new mysqli(
        $host,
        $username,
        $password,
        $database
    );

   
} catch (mysqli_sql_exception $error) {
    exit("Database connection failed.");
}