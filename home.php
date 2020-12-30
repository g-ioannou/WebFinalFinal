<?php 
        // include "connection_db.php";
        // if(!isset($_SESSION['email'])){
        //     header('Location: home.php'); //να αλλαχτει
        // }
        
        // if(!isset($_SESSION['email'])){
        //     header('Location: home.php'); //να αλλαχτει
        // }


?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" type="text/css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="logo_short.png" type="image/x-icon">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Harrow</title> 
</head>
<body>
    <img id="background" src="background.png" alt="Harrow Background">
    <div class="top">
        <img id="logo" src="logo.png" alt="Harrow logo" title="Harrow">
        <button id="menu-btn" title="Menu"> <i class="fal fa-bars"></i></button>
        <a id="logout" href="logout.php" title="Log out"><i class="fal fa-sign-out-alt"></i></img></a>
        <button id ='profile' title="Profile"><i class="fal fa-user"></i></i> </button>
    </div>
    <div  class='drp-menu'>
        <img id="logo-short" src="logo_short.png" alt="Harrow logo" title="Harrow">
        <link rel="icon" href="logo_short.png" type="image/x-icon">
        <button id="close-menu"><i class="fal fa-expand-arrows"></i></button>
        <ul>    
            <li><button class='inner-menu-btn' id='upload-btn'><i class="fal fa-upload"></i> Upload</button></li>
            <li><button class='inner-menu-btn' id='stats-btn'><i class="fal fa-chart-pie"></i></i>   Stats & Graphs</button> </li>
            <li><button class='inner-menu-btn' id='heatmap-btn'><i class="fal fa-map-marked"></i>   Heatmap</button></li>
            <li><button class='inner-menu-btn' id='faq-btn'><i class="fal fa-question-circle"></i> F.A.Q.</button></li>
        </ul>
    </div>
    
    <!-- insert div contents below this section -->
    
    <div id='faq'>
        
        <i class="fal fa-question"></i>  What is a HAR file
        <h6>HAR, short for HTTP Archive, is a format used for tracking information between a web browser and a website.</h6>
        <br>
        <i class="fal fa-question"></i> Why should I use Harrow
        <h6>We provide a friendly user interface, healping you easily spot the location your information comes from and run manual diagnostics on
        your network of information!</h6>
        <br>
        <i class="fal fa-question"></i> Where can I find these 'HAR' files
        <h6>We provide you with simple steps below to help you get the information you need. </h6>
        <br>
        <i class="fal fa-shoe-prints"></i> Step 1: Open your browser. Click on the settings icon. Navigate to 'More tools' and click 'Developer Tools'.<br><br>
        <img class='step' src="steps/step1.png" alt='step 1'><br>
        <i class="fal fa-wrench"></i>
    </div>
    <div id='upload'>Upload div <i class="fal fa-wrench"></i></div>
    <div id='stats'>Stats div <i class="fal fa-wrench"></i></div>
    <div id='heatmap'>Heatmap div <i class="fal fa-wrench"></i></div>
    
        
    <script src="style.js"></script>
</body>

</html>