function openModal() {
  $("#appointmentModal").modal("show");
}

function CheckIfUserExist() {
  swal("First You Have To make An Account‼️");
}

function handleAppointmentForm(event) {
  event.preventDefault();

  let name = $("#name").val();
  let appintmentDay = $("#appiontment_day").val();
  let hospital = $("#hospital").val();
  let description = $("#description").val();

  let sendingData = {
    name: name,
    appintmentDay: appintmentDay,
    hospital: hospital,
    description: description,
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
        // saveToLOcal();
        displayMessage("success", response);
      } else {
        displayMessage("error", response);
      }
    },
    error: function (data) {
      console.log(data);
    },
  });
}

// getFromLocal();

function saveToLOcal() {
  $(".mk_appointment").addClass("prevent_click");
  localStorage.setItem("isCliked", true);
}

function getFromLocal() {
  if (localStorage.getItem("isCliked")) {
    $(".mk_appointment").addClass("prevent_click");
  }
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

$(".mk_appointment").on("click", openModal);
$(".check_usr").on("click", CheckIfUserExist);
$("#appointmentForm").on("submit", handleAppointmentForm);
