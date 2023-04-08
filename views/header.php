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
    <link rel="stylesheet" href="../assests/css/footer.css" />
    <!-- Css Link -->
  </head>
  <body>

  <header class="header__wrapper marginX">
      <div class="overlay has-fade"></div>
      <nav class="flex jc-sb ai-c">
        <a class="logo" href="/">Som Blood Donation</a>

        <a href="#" id="btnHumberger" class="header__toggle hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div class="header__links hide-for-mobile">
          <a href="/views/home.php">Home</a>
          <a href="/views/roles.php">How to donate</a>
          <a href="#">About us</a>
          <a href="#">Donate</a>
        </div>

        <div class="log__reg hide-for-mobile">
          <a href="./signin.php">Sign In</a>
          <a href="./registration.php">Sign Up</a>
        </div>
      </nav>

      <div class="header__menu flex fd-c has-fade">
        <a href="/views/home.php">Home</a>
        <a href="/views/roles.php">How to donate</a>
        <a href="#">About us</a>
        <a href="#">Donate</a>

        <div class="menu__reg__lg flex fd-c">
          <a href="./signin.php">Sign In</a>
          <a href="./registration.php">Sign Up</a>
        </div>
      </div>
    </header>