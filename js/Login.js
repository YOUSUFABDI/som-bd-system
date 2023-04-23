// signin form validation
function handleLoginForm(event) {
  event.preventDefault();

  const errorMessages = [];

  validationForm(errorMessages);

  // checking if error exists
  if (errorMessages.length > 0) return;

  // login
  login();
}

// validating inputs function
function validationForm(errorMessages) {
  //validation input elements
  const signinUserName = document.querySelector(".signin-username");
  const signinPass = document.querySelector(".signin-password");

  // error paragraph elements
  const errUserName = document.querySelector(".err-username");
  const errPassword = document.querySelector(".err-password");

  // regular exprestions that checks inputs values
  const validName = new RegExp(
    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  );
  if (!validName.test(signinUserName.value)) {
    errorMessages.push("invalid username");
    errUserName.innerText = "invalid username";
  } else {
    errUserName.innerText = "";
  }

  const validPassword = new RegExp(/^.{8,30}$/);
  if (!validPassword.test(signinPass.value)) {
    errorMessages.push("enter password first");
    errPassword.innerText = "enter password first";
  } else {
    errPassword.innerText = "";
  }
}

// login function
function login() {
  let username = $("#username").val();
  let password = $("#password").val();

  let sendingData = {
    username: username,
    password: password,
    action: "login",
  };

  $.ajax({
    method: "POST",
    dataType: "JSON",
    url: "../api/blood-donation.php",
    data: sendingData,
    success: function (data) {
      let status = data.status;
      let response = data.data;

      // checking if username or pass is correct
      if (status) {
        swal(response, "Welcome 🙋‍♂️", {
          buttons: false,
          timer: 3000,
          icon: "success",
        });

        setTimeout(() => {
          // reseting form inputs
          $("#username").val("");
          $("#password").val("");

          window.location.href = "../views/home.php";
          // localStorage.clear();
        }, 3000);
      } else {
        swal(response, {
          buttons: false,
          timer: 3000,
          icon: "error",
        });
        $("#password").val("");
      }
    },
    error: function (data) {
      console.log(data);
    },
  });
}

function showHidePassWord() {
  const passwordInput = document.getElementById("password");
  const showHideText = document.querySelector(".show_hide_txt");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showHideText.innerText = "Hide Password";
  } else {
    passwordInput.type = "password";
    showHideText.innerText = "Show Password";
  }
}

// adding submit form on the form
$(".signin__form").on("submit", handleLoginForm);
document
  .querySelector("#pass_togle_input_btn")
  .addEventListener("click", showHidePassWord);
