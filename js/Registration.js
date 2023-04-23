// form function
function handleRegForm(event) {
  event.preventDefault();

  const errorMessages = [];

  validationForm(errorMessages);

  // checking if error exists
  if (errorMessages.length > 0) return;

  // registering user
  registerUser();
}

// validating inputs function
function validationForm(errorMessages) {
  // error paragraph elements
  const errL = document.querySelector(".errl");
  const errP = document.querySelector(".errp");
  const errE = document.querySelector(".erre");
  const errU = document.querySelector(".erru");
  const errPass = document.querySelector(".errpass");
  const errCp = document.querySelector(".errcp");

  //validation input elements
  const fullNameInput = document.querySelector(".full_name");
  const phoneNumInput = document.querySelector(".phonenumber");
  const emailInput = document.querySelector(".email");
  const userNameInput = document.querySelector(".username");
  const passwordInput = document.querySelector(".password");
  const confirmPassword = document.querySelector(".confirmpass");

  // regular exprestions that checks inputs values
  const validName = new RegExp(
    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  );

  if (!validName.test(fullNameInput.value)) {
    errorMessages.push("enter your name");
    errL.innerText = "enter your name";
  } else {
    errL.innerText = "";
  }

  const validPhone = new RegExp(/^[6]\d{8}$/);
  if (!validPhone.test(phoneNumInput.value)) {
    errorMessages.push("invalid phone number");
    errP.innerText = "invalid phone number";
  } else {
    errP.innerText = "";
  }

  const validGmail = new RegExp(/^[\w.+\-]+@gmail\.com$/);
  if (!validGmail.test(emailInput.value)) {
    errorMessages.push("invalid gamil");
    errE.innerText = "invalid gamil";
  } else {
    errE.innerText = "";
  }

  if (!validName.test(userNameInput.value)) {
    errorMessages.push("invalid username");
    errU.innerText = "invalid username";
  } else {
    errU.innerText = "";
  }

  const validPassword = new RegExp(/^.{8,30}$/);
  if (!validPassword.test(passwordInput.value)) {
    errorMessages.push("enter password first");
    errPass.innerText = "enter password first";
  } else {
    errPass.innerText = "";
  }

  if (!validPassword.test(confirmPassword.value)) {
    errorMessages.push("enter confirmPassword first");
    errCp.innerText = "enter confirmPassword first";
  } else {
    errCp.innerText = "";
  }

  if (confirmPassword.value !== passwordInput.value) {
    errorMessages.push("Passwords must match");
  }
}

// registering student function
function registerUser() {
  let fullName = $("#full_name").val();
  let gender = $("#gender").val();
  let bloodType = $("#bloodType").val();
  let phonenumber = $("#phonenumber").val();
  let address = $("#address").val();
  let userType = $("#userType").val();
  let gmail = $("#email").val();
  let username = $("#username").val();
  let password = $("#password").val();
  let confirmpass = $("#confirmpass").val();

  let sendingData = {
    fullName: fullName,
    userType: userType,
    bloodType: bloodType,
    gmail: gmail,
    userName: username,
    password: password,
    confirmPass: confirmpass,
    address: address,
    gender: gender,
    phone: phonenumber,
    action: "registerUser",
  };

  $.ajax({
    method: "POST",
    dataType: "JSON",
    url: "../api/blood-donation.php",
    data: sendingData,
    success: function (data) {
      let status = data.status;
      let response = data.data;

      // check if user is registered or not
      if (status) {
        swal(response, "Login Please", {
          buttons: false,
          timer: 3000,
          icon: "success",
        });

        // reseting form inputs
        $("#full_name").val("");
        $("#gender").val("");
        $("#bloodType").val("");
        $("#phonenumber").val("");
        $("#address").val("");
        $("#userType").val("");
        $("#email").val("");
        $("#username").val("");
        $("#password").val("");
        $("#confirmpass").val("");
      } else {
        swal(response, {
          buttons: false,
          timer: 3000,
          icon: "error",
        });
      }
    },
    error: function (data) {
      console.log(data);
    },
  });
}

function showHidePassWord(event) {
  passToTextToggle(event);
}

function passToTextToggle(event) {
  const passwordInput = document.querySelectorAll(".password");
  const showHideText = document.querySelectorAll(".show_hide_txt");

  if (event.target.classList.contains("pass")) {
    if (passwordInput[0].type === "password") {
      passwordInput[0].type = "text";
      showHideText[0].innerText = "Hide Password";
    } else {
      passwordInput[0].type = "password";
      showHideText[0].innerText = "Show Password";
    }
  } else {
    if (passwordInput[1].type === "password") {
      passwordInput[1].type = "text";
      showHideText[1].innerText = "Hide Password";
    } else {
      passwordInput[1].type = "password";
      showHideText[1].innerText = "Show Password";
    }
  }
}

// adding submit form on the form
$(".registeration__form").on("submit", handleRegForm);
const checkBxTgle = document.querySelectorAll(".reg_togle_input_btn");
checkBxTgle.forEach((btn) => {
  btn.addEventListener("click", showHidePassWord);
});
