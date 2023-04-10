function routePage(element) {
  if (element.matches(".logo")) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      window.location.href = "../views/";
    });
  }

  if (element.matches(".home")) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      window.location.href = "../views/home.php";
    });
  }

  if (element.matches(".roles")) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      window.location.href = "../views/roles.php";
    });
  }

  if (element.matches(".login")) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      window.location.href = "../views/login.php";
    });
  }

  if (element.matches(".registration")) {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(e.target);
      window.location.href = "../views/registration.php";
    });
  }
}

document.querySelectorAll(".btn_load_screen").forEach((element) => {
  routePage(element);
});
