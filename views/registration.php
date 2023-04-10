<?php
include 'header.php';
?>

    <section class="registration__section paddingX">
      <h2 class="reg__title">Sign up</h2>
      <span class="reg__sub__title"
        >Enter your detail to create an account</span
      >

      <form  action="" class="registeration__form" id="registerForm">
        <div class="registration__grid">

          <div class="registeration__item">
            <span>Full Name</span>
            <input type="text" class="full_name" name="full_name" id="full_name"/>
            <p class="errl" style="color: red"></p>
          </div>

          <div class="registeration__item">
            <span>Gender</span>
            <select name="gender" id="gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div class="registeration__item">
            <span>Blood Type</span>
            <select name="bloodType" id="bloodType">
              <option>A</option>
              <option>B</option>
              <option>AB</option>
              <option>O</option>
            </select>
          </div>

          <div class="registeration__item">
            <span>Phone Number</span>
            <input type="text" class="phonenumber" name="phonenumber" id="phonenumber"/>
            <p class="errp" style="color: red"></p>
          </div>

          <div class="registeration__item">
            <span>Address</span>
            <input type="text" class="address" name="address" id="address"/>
            <!-- <p class="errp" style="color: red"></p> -->
          </div>

          <div class="registeration__item">
            <span>Type</span>
            <select id="userType" name="userType" id="userType">
              <option>Donor</option>
              <option>Recipient</option>
            </select>
          </div>

          <div class="registeration__item">
            <span>Email</span>
            <input type="text" class="email" name="email" id="email"/>
            <p class="erre" style="color: red"></p>
          </div>

          <div class="registeration__item">
            <span>Username</span>
            <input type="text" class="username" name="username" id="username"/>
            <p class="erru" style="color: red"></p>
          </div>

          <div class="registeration__item">
            <span>Password</span>
            <input type="text" class="password" name="password" id="password"/>
            <p class="errpass" style="color: red"></p>
          </div>

          <div class="registeration__item">
            <span>Confirm Password</span>
            <input type="text" class="confirmpass" name="confirmpass" id="confirmpass"/>
            <p class="errcp" style="color: red"></p>
          </div>
        </div>

        <button type="submit" class="reg__btn">Sign Up</button>
      </form>

      <div class="registeration__foot">
        <p>Already have an account?</p>
        <a href="./login.php">Sign In</a>
      </div>
    </section>


<?php
include 'footer.php';
?>
<script src="../js/Registration.js"></script>