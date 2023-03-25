const form = document.querySelector(".registeration__form");
const firstNameInput = document.querySelector(".firstname");
const secondNameInput = document.querySelector(".secondname");
const lastNameInput = document.querySelector(".lastname");
const phoneNumInput = document.querySelector(".phonenumber");
const emailInput = document.querySelector(".email");
const userNameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmpass");
const errF = document.querySelector(".errf");
const errS = document.querySelector(".errs");
const errL = document.querySelector(".errl");
const errP = document.querySelector(".errp");
const errE = document.querySelector(".erre");
const errU = document.querySelector(".erru");
const errPass = document.querySelector(".errpass");
const errCp = document.querySelector(".errcp");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorMessages = [];

  validationForm(errorMessages);

  if (errorMessages.length > 0) {
    showErrors();
  } else {
    swal("thanks for registration", "You donar donar now!", "success");
  }
});

function validationForm(errorMessages) {
  const validName = new RegExp(
    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
  );

  if (!validName.test(firstNameInput.value)) {
    errorMessages.push("enter your first name");
    errF.innerText = "enter your first name";
  } else {
    errF.innerText = "";
  }

  if (!validName.test(secondNameInput.value)) {
    errorMessages.push("enter your second name");
    errS.innerText = "enter your second name";
  } else {
    errS.innerText = "";
  }

  if (!validName.test(lastNameInput.value)) {
    errorMessages.push("enter your last name");
    errL.innerText = "enter your last name";
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

function showErrors() {
  swal("Fill out the form first!", "You have to enter your info!", "error");
}
