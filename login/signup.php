<?php
include('db.php'); //includes the database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //Get form inputs
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); //Secure password hash

    //prepare SQL statement
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->blind_param('sss', $username, $email, $password);

    //execute the statement and check for errors
    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}
?>

