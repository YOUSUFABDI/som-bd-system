function routePage(element) {
  if (element.matches(".logo")) {
    element.addEventListener("click", goToHomePage);
  }

  if (element.matches(".home")) {
    element.addEventListener("click", goToHomePage);
  }

  if (element.matches(".roles")) {
    element.addEventListener("click", goToRolesPage);
  }

  if (element.matches(".appointment")) {
    element.addEventListener("click", goToAppointmentPage);
  }

  if (element.matches(".login")) {
    element.addEventListener("click", gotToLoginPage);
  }

  if (element.matches(".registration")) {
    element.addEventListener("click", goToRegistrationPage);
  }

  if (element.matches(".profile")) {
    element.addEventListener("click", goToProfilePage);
  }
}

function goToHomePage(e) {
  e.preventDefault();
  window.location.href = "../views/";
}

function goToRolesPage(e) {
  e.preventDefault();
  window.location.href = "../views/roles.php";
}

function goToAppointmentPage(e) {
  e.preventDefault();
  window.location.href = "../views/appointment.php";
}

function gotToLoginPage(e) {
  e.preventDefault();
  window.location.href = "../views/login.php";
}

function goToRegistrationPage(e) {
  e.preventDefault();
  window.location.href = "../views/registration.php";
}

function goToProfilePage(e) {
  e.preventDefault();
  window.location.href = "../views/user_profile.php";
  console.log("d");
}

document.querySelectorAll(".btn_load_screen").forEach((element) => {
  routePage(element);
});
