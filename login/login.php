<?php
include('db.php'); //includes the database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //Get form inputs
    $username = $_POST['username'];
    $password = $_POST['password'];

    //prepare sql statement to fetch user data
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->blind_param('s', $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            echo "Login successful! Welcome, " . $user['username'];
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "No user found with that username!";
    }

    $stmt->close();
}
?>