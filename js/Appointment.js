function openModal() {
  $("#appointmentModal").modal("show");
}

function closeModal() {
  $("#appointmentModal").modal("hide");
}

function CheckIfUserExist() {
  swal("First You Have To make An Account‼️");
}

function handleAppointmentForm(event) {
  event.preventDefault();

  const errorMessages = [];

  validateAppointmentForm(errorMessages);

  // checking if error exists
  if (errorMessages.length > 0) return;

  makeAppointment();
}

function makeAppointment() {
  let name = $("#name").val();
  let appintmentDay = $("#appiontment_day").val();
  let hospital = $("#hospital").val();
  let description = $("#description").val();
  let phone = $("#phone").val();
  let bloodType = $("#bloodType").val();

  let sendingData = {
    name: name,
    appintmentDay: appintmentDay,
    hospital: hospital,
    description: description,
    phone: phone,
    bloodType: bloodType,
    action: "makeAppointment",
  };

  $.ajax({
    method: "POST",
    dataType: "JSON",
    url: "../api/appointment.php",
    data: sendingData,
    success: function (data) {
      let status = data.status;
      let response = data.data;

      if (status) {
        $("#appiontment_day").val("");
        $("#hospital").val("");
        $("#description").val("");

        $("#appointmentModal").modal("hide");

        swal(response);
      } else {
        displayMessage("error", response);
      }
    },
    error: function (data) {
      console.log(data);
    },
  });
}

function displayMessage(type, message) {
  let successAlert = document.querySelectorAll(".alert-success");
  let errorAlert = document.querySelectorAll(".alert-danger");

  if (type == "success") {
    successAlert.forEach((successAl) => {
      successAl.classList.remove("d-none");
      successAl.innerText = message;
    });
  } else {
    errorAlert.forEach((errorAl) => {
      errorAl.classList.remove("d-none");
      errorAl.innerText = message;
    });

    successAlert.forEach((successAl) => {
      successAl.classList.add("d-none");
    });
  }
}

function validateAppointmentForm(errorMessages) {
  // get err paragraphs
  const errName = document.querySelector(".err_name");
  const errdesc = document.querySelector(".err_desc");
  const errDay = document.querySelector(".err_day");
  const errHospital = document.querySelector(".err_hospital");

  // get input elements to validate
  const fullName = document.querySelector("#name");
  const description = document.querySelector("#description");
  const appintmentDay = document.querySelector("#appiontment_day");
  const hospital = document.querySelector("#hospital");

  // name
  if (!fullName.value) {
    errorMessages.push("enter your name");
    errName.innerText = "enter your name";
  } else {
    errName.innerText = "";
  }

  // appo day
  if (!appintmentDay.value) {
    errorMessages.push("choose day");
    errDay.innerText = "choose day";
  } else {
    errDay.innerText = "";
  }

  // hospital
  if (!hospital.value) {
    errorMessages.push("choose hospital");
    errHospital.innerText = "choose hospital";
  } else {
    errHospital.innerText = "";
  }

  // desc
  if (!description.value) {
    errorMessages.push("invalid description");
    errdesc.innerText = "invalid description";
  } else {
    errdesc.innerText = "";
  }
}

$(".mk_appointment").on("click", openModal);
$(".check_usr").on("click", CheckIfUserExist);
$("#appointmentForm").on("submit", handleAppointmentForm);
$("#closeModal").on("click", closeModal);
$("#closeModalbtn").on("click", closeModal);
