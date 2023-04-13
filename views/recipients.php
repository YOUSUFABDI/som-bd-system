<?php
include 'header.php';
?>

<!-- Bootsrap cdn -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<!-- Bootsrap cdn -->


<!-- [ basic-table ] start -->
<div class="marginX">
<div class="row mt-2">
  <div class="col-xl-12">
    <div class="card">
      <div class="card-header">
        <h5>Donors Table</h5>
        <span class="d-block m-t-5"
          >Here are <code>recipients</code> like you</span
        >
      </div>
      <div class="card-block table-border-style">
        <div class="table-responsive">
          <table class="table" id="recipientsTable">
            <thead>
              <tr>
                <th>User Type</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Blood Type</th>
                <th>Phone</th>
              </tr>
            </thead>

            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
<!-- [ basic-table ] end -->



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
<script src="../js/Recipients.js"></script>