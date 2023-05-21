<?php
include 'header.php';
?>


    <section class="carousel__section marginX">
      <div class="carousel__image__info">
        <img
          src="../assests/images/Blood donation-pana.png"
          alt="donation-pana-img"
          name="slide"
        />
        <div class="carousel__info">
          <h3 class="cr__title">Recent Blood Donation Happened</h3>
          <p class="cr__content">
            People realy need people today some saves aperson live by transution
            of bloood always find out how often you can donate blood and make an
            appointment to donate today.
          </p>
        </div>
      </div>

      <div class="carousel__buttons">
        <span class="left__btn">
          <i class="fa-solid fa-chevron-left"></i>
        </span>
        <span class="right__btn">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
      </div>

      <div class="carousel__dots" id="do__wrap">
        <button class="img-dot"></button>
        <button class="img-dot"></button>
        <button class="img-dot"></button>
        <button class="img-dot"></button>
      </div>
    </section>

    <!-- id -->
    <?php if(isset($_SESSION['username']) && !empty($_SESSION['username'])){
    ?>
    <input type="hidden" name="update_id" id="update_id" value=" <?php echo $_SESSION['id'] ?> ">
    <?php }else{?>
      <input type="hidden" name="update_id" id="update_id" value="">
    <?php }?>
    <!-- id -->

    <section class="ways__section marginX">
      <span class="ways__title">ways to give blood</span>

      <div class="ways__image__info">
        <div class="ways__img__wrapper">
          <img
            class="ways__img"
            src="../assests/images/Blood test-pana.svg"
            alt="blood-test-img"
          />
        </div>

        <div class="ways__info">
          <span class="ways__info__title">Donate in Somali</span>
          <p>
            Every day, patients in your community need blood transfusions to
            survive and thrive. they rely on the generosity of donors like you,
            who help ensure a safe, healthy blood supply. Make an appointment to
            donate blood today.
          </p>
          <a href="./appointment.php" class="ways__btn">Make Appointment</a>
        </div>

      </div>
    </section>

    <section class="donation__highlight__section marginX">
      <span class="hightlight__title">Donation Highlights</span>
      <div class="donation__highlight__cards">
        <div class="donation__highlight__card">
          <div class="hightlight__img">
            <img
              src="../assests/images/Blood donation-bro.svg"
              alt="blood-donation-img"
            />
          </div>
          <div class="highlight__info">
            <span>Want to donate for the first time?</span>
            <p>
              We always need new donors. Let us take you through the steps to
              becoming a donor and the process of getting that first appointment
              booked.
            </p>
            <a href="./appointment.php">Donate Today</a>
          </div>
        </div>

        <div class="donation__highlight__card">
          <div class="hightlight__img">
            <img
              src="../assests/images/Blood donation-amico.svg"
              alt="blood-donation-img"
            />
          </div>
          <div class="highlight__info">
            <span>We need blood donors</span>
            <p>
              There are patients need blood if you give away even one unit of
              blood means you are saving live and you are live saver so to
              donate now set up an appointment now.
            </p>
            <a href="./appointment.php">Donate Today</a>
          </div>
        </div>

        <div class="donation__highlight__card">
          <div class="hightlight__img">
            <img
              src="../assests/images/Blood donation-rafiki.svg"
              alt="blood-donation-img"
            />
          </div>
          <div class="highlight__info">
            <span>Save a life today give blood.</span>
            <p>
              Every two seconds Someone needs blood so make your appointment now
              to donate to save life.
            </p>
            <a href="./appointment.php">Donate Today</a>
          </div>
        </div>
      </div>
    </section>


<?php
include 'footer.php';
?>
<script src="../js/Carousel.js"></script>
