<?php
include 'header.php';
?>

    <!-- Bootsrap cdn -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- Bootsrap cdn -->

<section class="appiontment marginX">
    <div class="appiontment_right">
        <h1>Make Appointment Request Form</h1>
        <p>Make your appointments more easier</p>

        <?php if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
        ?>
        <div class="fl">
        <button class="mk_appointment">Make Appointment</button>
        </div>
        <?php } else { ?>
        <button class="check_usr">Make Appointment</button>
        <?php } ?>

    </div>

    <div class="appiontment_left">
        <img src="../assests/images/Date-picker.svg" alt="Date-picker" />
    </div>
</section>

    <!-- modal -->
    <div class="modal" tabindex="-1" role="dialog" id="appointmentModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Appointment Form</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="appointmentForm">
              <!-- hidden input for id -->
              <input type="hidden" name="upd_id" id="upd_id"/>

              <div class="row">
                <!-- alert -->
                <div class="col-sm-12">
                  <div class="alert alert-success d-none" role="alert">
                    This is a success alert—check it out!
                  </div>
                  <div class="alert alert-danger d-none" role="alert">
                    This is a danger alert—check it out!
                  </div>
                </div>
                <!-- alert -->

                <!-- name -->
                <div class="col-sm-12">
                  <div class="form-group">
                    <label for="">Name</label>
                    <?php if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
                    ?>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value=" <?php echo $_SESSION['fullName']?> "
                    class="form-control mt-2"
                    />
                    <?php } else { ?>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value=""
                    class="form-control mt-2"
                    />
                    <?php } ?>

                  </div>
                </div>
                <!-- name -->

                <!-- appiontment day -->
                <div class="col-sm-12 mt-4">
                  <div class="form-group">
                    <label for="">Appiontment Day</label>
                    <select name="appiontment_day" id="appiontment_day" class="form-control mt-2">
                      <option value="Staurday">Staurday</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                    </select>
                  </div>
                </div>
                <!-- appiontment day -->

                <!-- hospital -->
                <div class="col-sm-12 mt-4">
                  <div class="form-group">
                    <label for="">Hospital</label>
                    <select name="hospital" id="hospital" class="form-control mt-2">
                      <option value="Banadir Hospital">Banadir Hospital</option>
                      <option value="Shaafi Hospital">Shaafi Hospital</option>
                    </select>
                  </div>
                </div>
                <!-- hospital -->

                <!-- description -->
                <div class="col-sm-12 mt-4">
                  <div class="form-group">
                    <label for="">Description</label>
                    <input
                      class="form-control mt-2"
                      type="text"
                      name="description"
                      id="description"
                    />
                  </div>
                </div>
                <!-- description -->

              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->


<!-- id -->
<?php if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
?>
<input type="hidden" name="update_id" id="update_id" value=" <?php echo $_SESSION['id'] ?> ">
<?php } else { ?>
<input type="hidden" name="update_id" id="update_id" value="">
<?php } ?>
<!-- id -->

<?php
include 'footer.php';
?>
<script src="../js/Appointment.js"></script>