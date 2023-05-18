<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Som Blood Donation System</title>
    <!-- Fonts Cdn  -->
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400&display=swap"
      rel="stylesheet"
    />

    <!-- Favicon icon -->
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="../assests/images/blood-icon.png"
    />

    <!-- Font awesome cdn -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- Css Link -->
    <link rel="stylesheet" href="../assests/css/globals.css" />
    <link rel="stylesheet" href="../assests/css/header.css" />
    <link rel="stylesheet" href="../assests/css/home.css" />
    <link rel="stylesheet" href="../assests/css/registeration.css" />
    <link rel="stylesheet" href="../assests/css/login.css" />
    <link rel="stylesheet" href="../assests/css/roles.css" />
    <link rel="stylesheet" href="../assests/css/appointment.css" />
    <link rel="stylesheet" href="../assests/css/user_profile.css" />
    <link rel="stylesheet" href="../assests/css/footer.css" />
    <!-- Css Link -->
  </head>
  <body>

  <header class="header__wrapper marginX">
      <div class="overlay has-fade"></div>
      <nav class="flex jc-sb ai-c">
        <a class="logo btn_load_screen">Som Blood Donation</a> 

        <a id="btnHumberger" class="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div class="header__links hide-for-mobile">
          <a class="btn_load_screen home">Home</a>
          <a class="btn_load_screen roles">How to donate</a>
          <a class="btn_load_screen appointment">Appointments</a>
          <?php if(isset($_SESSION['userType']) && $_SESSION['userType'] == "Donor"){
          ?>
         <a class="btn_load_screen donors">Donors</a>
         <?php } else if(isset($_SESSION['userType']) && $_SESSION['userType'] == "Recipient") { ?>
          <a class="btn_load_screen recipients">Recipients</a>
         <?php } ?>
        </div>

        

        <!-- Showing profile button if user exits and hidding if -->
        <?php if( isset($_SESSION['username']) && !empty($_SESSION['username']) ){
          ?> 
        <div class="log__reg hide-for-mobile">
        <a class="profile_name__icon btn_load_screen profile" id="head__profile_name"> <span class="icon"><i class="fa-solid fa-user"></i></span> <?php echo $_SESSION['username'] ?></a>
        </div>

        <?php }else{ ?>
        <div class="log__reg hide-for-mobile">
          <a class="btn_load_screen login">Sign In</a>
          <a class="btn_load_screen registration">Sign Up</a>
        </div>
        <?php } ?>

      </nav>

      <div class="header__menu flex fd-c has-fade">
        <a class="btn_load_screen home">Home</a>
        <a class="btn_load_screen roles">How to donate</a>
        <a class="btn_load_screen appointment">Appointments</a>
        <?php if(isset($_SESSION['userType']) && $_SESSION['userType'] == "Donor"){
          ?>
         <a class="btn_load_screen donors">Donors</a>
         <?php } else if(isset($_SESSION['userType']) && $_SESSION['userType'] == "Recipient") { ?>
          <a class="btn_load_screen recipients">Recipients</a>
         <?php } ?>

        <!-- Showing profile button if user exits and hidding if -->
        <?php if( isset($_SESSION['username']) && !empty($_SESSION['username']) ){
        ?> 
        <div class="log__reg">
        <a class="profile_name__icon btn_load_screen profile" id="head__profile_name"> <p class="icon"><i class="fa-solid fa-user"></i></p> <?php echo $_SESSION['username'] ?></a>
        </div>

        <?php }else{ ?>
          <div class="menu__reg__lg flex fd-c">
          <a class="btn_load_screen login">Sign In</a>
          <a class="btn_load_screen registration">Sign Up</a>
        </div>
        <?php } ?>


      </div>
    </header>