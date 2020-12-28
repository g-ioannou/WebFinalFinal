<?php 
    
    include "connection_db.php";
    //if(!isset($_SESSION['email'])){
      //  header('Location: home.php');
    //}

    if($_POST['type'] == 3){
        $username = $_POST['username'];
        $new_username = $_POST['new_username'];
        $password = sha1(md5($password)); //crypt pass

        $query = mysqli_query($conn, "SELECT * FROM `user` WHERE `username` = '$username' AND `password`='$password' ");
        $num = mysqli_num_rows($query);
        $row = mysqli_fetch_array($query);

        if( $num == 1 ){
            console.log("hi");
            $_SESSION['email'] = $row['email'];
            $sql = mysqli_query($conn, "UPDATE `user` SET username = '$new_username' WHERE username='$username' ");
            echo "success";
        }
        else{
            echo "fail";
        }
        mysqli_close($conn); //may not needed

    } 


?>