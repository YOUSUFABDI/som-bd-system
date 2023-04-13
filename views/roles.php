<?php
include 'header.php';
?>

    <section class="roles__section marginX">
      <h2>How to donate and Eligibility Criteria</h2>
      <div class="roles__wrapper">
        <div class="role__wrap">
          <span>Age</span>
          <p>
            You must be at least 17 years old to donate to the general blood, or
            older than 17, if allowed by state law. There is no upper age limit
            for blood donation as long as you are well with no restrictions or
            limitations to your activities. Persons under the age of 17 may,
            however, donate blood for their own use, in advance of scheduled
            surgery or in situations where their blood has special medical value
            for a particular patient such as a family member.
          </p>
        </div>

        <div class="role__wrap">
          <span>Weight</span>
          <p>
            You must weigh at least 110 lbs to be eligible for blood donation
            for your own safety.
          </p>
        </div>

        <div class="role__wrap">
          <span>Health</span>
          <p>
            The person donating blood must be healthy means if the person have
            cancer or aids, heart attack and other risky diseases it's not
            allowed to donate blood due to his own healthy and the health of the
            others.
          </p>
        </div>

        <div class="role__wrap role__wrap__foot">
          <h2 class="role__wrap__foot__title">
            How to make an appointment to donate blood
          </h2>
          <div>
            <span>
              .First you need to have an account as donor to make donation.
            </span>
            <span>
              .Second you need fullfil the espangibispanty criteria to make
              donation.
            </span>
            <span>.Also you need to the donation page</span>
            <span>
              .After you go to donation page the make an appointment to donate
              blood.
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- id -->
    <?php if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
    ?>
    <input type="hidden" name="update_id" id="update_id" value=" <?php echo $_SESSION['id'] ?> ">
    <?php }else {?>
    <input type="hidden" name="update_id" id="update_id" value="">
    <?php } ?>
    <!-- id -->

    <section class="blood__type__section marginX">
      <h2>Facts About Different Blood Types</h2>
      <div class="blood__type__wrapper">
        <div class="blood__type__card">
          <div class="blood__type__desc">
            <span>A+ Facts</span>
            <div class="blood__type__content">
              <span
                >.30% of the population have A+ blood the second-most common
                type, so your donations are always in demand.</span
              >

              <span>.You can give blood to patients with types A+ and AB+</span>

              <span>.You can receive blood from A+, A-, O+ and O- donors</span>
            </div>
          </div>
        </div>

        <div class="blood__type__card">
          <div class="blood__type__desc">
            <span>B- Facts</span>
            <div class="blood__type__content">
              <span
                >.2% of the population have B- blood - a rare type, so your
                donations are always needed</span
              >

              <span
                >.You can give blood to patients with types B-, B+, AB- and
                AB+</span
              >

              <span>.You can only receive blood from B- and O- donors</span>
            </div>
          </div>
        </div>

        <div class="blood__type__card">
          <div class="blood__type__desc">
            <span>B- Facts</span>
            <div class="blood__type__content">
              <span
                >.1% of the population have AB- blood - the least common
                type</span
              >

              <span
                >.You can give blood to patients with types AB- and AB+</span
              >

              <span>.You can receive blood from AB-, A-, B- and O- donors</span>
            </div>
          </div>
        </div>

        <div class="blood__type__card">
          <div class="blood__type__desc">
            <span>O+ Facts</span>
            <div class="blood__type__content">
              <span
                >.39% of the population have O+ blood - the most common
                type</span
              >

              <span
                >.You can give blood to patients with any positive type</span
              >

              <span>.You can only receive blood from O+ and O- donors</span>
            </div>
          </div>
        </div>
      </div>
    </section>

<?php
include 'footer.php';
?>