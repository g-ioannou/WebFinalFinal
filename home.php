<?php 
    include "connection_db.php";
    if(!isset($_SESSION['email'])){
        header('Location: login.html');
    }

    if(!isset($_SESSION['email'])){
        header('Location: user.html');
    }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HOMEPAGE</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

<link rel="stylesheet" href="styles.css"/>
<body>
    <h1>Homepage</h1>
    <br>

    <!--Edit profile-->
    <a href="user.html">Edit profile</a>
    
    
    <!--user logout-->
    <a href="logout.php">Logout</a>
</body>

</html>