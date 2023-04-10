<?php
include 'header.php';
?>

    <section class="signin__section paddingX">
      <h2>Sign In</h2>
      <span>Let's get start helping, saving people</span>

      <form class="signin__form">
        <div class="signin__form__item">
          <span>Username</span>
          <input type="text" class="signin-username" id="username"/>
          <p class="err-username" style="color: red"></p>
        </div>

        <div class="signin__form__item">
          <span>Password</span>
          <input type="text" class="signin-password" id="password"/>
          <p class="err-password" style="color: red"></p>
        </div>

        <button class="signin__btn">Sign In</button>
      </form>

      <div class="signin__foot">
        <p>Don't have an account?</p>
        <a href="./registration.php">Sign Up</a>
      </div>
    </section>

<?php
include 'footer.php';
?>  
<script src="../js/Login.js"></script>
