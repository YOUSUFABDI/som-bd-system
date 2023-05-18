let id = $("#update_id").val();
loadUserInfo(id);

function handleUpdateForm(event) {
  event.preventDefault();

  const errorMessages = [];

  validateUserProfile(errorMessages);

  // checking if error exists
  if (errorMessages.length > 0) return;

  UpdateUserProfile();
}

function UpdateUserProfile() {
  let id = $("#update_id").val();
  let name = $("#profile_fullname_input").val();
  let gender = $("#profile_gender_input").val();
  let bloodType = $("#profile_blood_input").val();
  let userType = $("#profile_usertype_input").val();
  let address = $("#profile_address_input").val();

  window.location.reload();

  let sendingData = {
    id: id,
    name: name,
    gender: gender,
    bloodType: bloodType,
    userType: userType,
    address: address,
    action: "update_user",
  };

  $.ajax({
    method: "POST",
    dataType: "JSON",
    url: "../api/blood-donation.php",
    data: sendingData,
    success: function (data) {
      let status = data.status;
      let response = data.data;

      if (status) {
        swal(response, {
          buttons: false,
          timer: 3000,
          icon: "success",
        });
      } else {
        swal(response, {
          buttons: false,
          timer: 3000,
          icon: "error",
        });
      }
    },
    error: function (data) {
      console.log(data.responseText);
    },
  });
}

function loadUserInfo(id) {
  let sendingData = {
    id: id,
    action: "get_users_info",
  };

  $.ajax({
    method: "POST",
    dataType: "JSON",
    url: "../api/blood-donation.php",
    data: sendingData,
    success: function (data) {
      let status = data.status;
      let response = data.data;

      if (status) {
        $("#update_id").val(response["id"]);
        $("#profile_fullname_input").val(response["fullName"]);
        $("#ursname").html(`Full Name &nbsp; :- ${response["fullName"]}`);
        $("#head__profile_name").html(
          `<span class="icon"><i class="fa-solid fa-user"></i></span> ${response["username"]}`
        );
        $("#profile_blood_input").val(response["bloodType"]);
        $("#profile_gender_input").val(response["gender"]);
        $("#profile_usertype_input").val(response["userType"]);
        $("#profile_address_input").val(response["address"]);
      } else {
        alert(response);
      }
    },
    error: function (data) {
      console.log(data.responseText);
    },
  });
}

function validateUserProfile(errorMessages) {
  // get err paragraphs
  const errName = document.querySelector(".err_name");
  const errBtype = document.querySelector(".err_bd");
  const errGender = document.querySelector(".err_gender");
  const err_usertype = document.querySelector(".err_usertype");
  const errAddress = document.querySelector(".err_address");

  // get input elements to validate
  const fullName = document.querySelector("#profile_fullname_input");
  const userType = document.querySelector("#profile_usertype_input");
  const bloodType = document.querySelector("#profile_blood_input");
  const gender = document.querySelector("#profile_gender_input");
  const address = document.querySelector("#profile_address_input");

  // check input values if they null or valid

  // name
  if (!fullName.value) {
    errorMessages.push("enter your name");
    errName.innerText = "enter your name";
  } else {
    errName.innerText = "";
  }

  // user type
  if (!userType.value) {
    errorMessages.push("invalid user type");
    err_usertype.innerText = "invalid user type";
  } else {
    err_usertype.innerText = "";
  }

  // blood type
  if (!bloodType.value) {
    errorMessages.push("invalid blood type");
    errBtype.innerText = "invalid blood type";
  } else {
    errBtype.innerText = "";
  }

  // gender
  if (!gender.value) {
    errorMessages.push("invalid gender");
    errGender.innerText = "invalid gender";
  } else {
    errGender.innerText = "";
  }

  // address
  if (!address.value) {
    errorMessages.push("invalid address");
    errAddress.innerText = "invalid address";
  } else {
    errAddress.innerText = "";
  }
}

$("#updateForm").on("submit", handleUpdateForm);
