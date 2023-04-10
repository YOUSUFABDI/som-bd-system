<?php

include 'header.php';


?>

<section class="page-content page-container" id="page-content">
  <div class="padding">
    <div class="row container d-flex justify-content-center">
      <div class="col-xl-6 col-md-12">
        <div class="card user-card-full">
          <div class="row m-l-0 m-r-0">
            <div class="col-sm-4 bg-c-lite-green user-profile">
              <div class="card-block text-center text-white">
                <div class="m-b-10">
                <span class="ico"><i class="fa-solid fa-user"></i></span>
                </div>
                <h6 class="f-w-600" id="ursname"><?php echo $_SESSION['username'] ?> </h6>
                <p id="user_type">User Type &nbsp; :- <?php echo $_SESSION['userType'] ?> </p>
                <p id="user_type">Blood Type &nbsp; :-  <?php echo $_SESSION['bloodType'] ?> </p>
              </div>  

              <div class="card-block text-center">
                <a class="lgout" href="../api/logout.php"><span><i class="fa-solid fa-power-off"></i></span> Logout</a>
              </div>
            </div>
            <!-- Form -->
            <form id="updateForm">
            <div class="col-sm-8">
              <div class="card-block">
                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                <div class="row">
                  <div class="col-sm-6">
                    <input type="hidden" name="update_id" id="update_id" value=" <?php echo $_SESSION['id'] ?> ">
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                   <p class="m-b-10 f-w-600">Full Name</p>
                    <input type="text" class="text-muted f-w-400 prof_input" id="profile_fullname_input" name="profile_fullname_input"  value=" <?php echo $_SESSION['fullName'] ?> ">
                  </div>
                  <div class="col-sm-6 m-t-10">
                    <p class="m-b-10 f-w-600">Phone</p>
                    <input type="text" class="text-muted f-w-400 prof_input" id="profile_phone_input" name="profile_phone_input" value=" <?php echo $_SESSION['phone'] ?> ">
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6 m-t-10">
                   <p class="m-b-10 f-w-600">Email</p>
                    <input type="text" class="text-muted f-w-400 prof_input" id="profile_email_input" name="profile_email_input" value=" <?php echo $_SESSION['gmail'] ?> ">
                  </div>

                <div class="row">
                  <div class="col-sm-6 m-t-10">
                   <p class="m-b-10 f-w-600">Username</p>
                    <input type="text" class="text-muted f-w-400 prof_input" id="profile_username_input" name="profile_username_input" value=" <?php echo $_SESSION['username'] ?> " >
                  </div>

                  <div class="col-sm-6  m-t-10">
                    <p class="m-b-10 f-w-600">Address</p>
                    <input type="text" class="text-muted f-w-400 prof_input" id="profile_address_input" name="profile_address_input" value=" <?php echo $_SESSION['address'] ?> ">
                  </div>

                </div>

            <div class="row m-t-10">
            <div class="col-sm-6">
            <button class="profile_save_changes">Save Changes</button>
            </div>
            </div>

              </div>
            </div>

            </form>
            <!-- Form -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
include 'footer.php';

?>
<script src="../js/UpdateProfile.js"></script>