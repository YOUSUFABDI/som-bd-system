// signin element
const signinForm = document.querySelector(".signin__form");
const signinUserName = document.querySelector(".signin-username");
const signinPass = document.querySelector(".signin-password");
const errUserName = document.querySelector(".err-username");
const errPassword = document.querySelector(".err-password");

// signin form validation
function handleSigninForm(event) {
  event.preventDefault();

  const errorMessages = [];

  validationForm(errorMessages);

  if (errorMessages.length > 0) {
    showErrors();
  } else {
    showSuccessMessage();
  }
}

function validationForm(errorMessages) {
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

function showErrors() {
  swal("Fill out the form first!", "You have to enter your info!", "error");
}

function showSuccessMessage() {
  swal("welcome back", "login succes!", "success");
}

signinForm.addEventListener("submit", handleSigninForm);
