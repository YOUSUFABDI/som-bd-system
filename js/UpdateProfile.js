let id = $("#update_id").val();
loadUserInfo(id);

function UpdateUserProfile(event) {
  event.preventDefault();

  let id = $("#update_id").val();
  let name = $("#profile_fullname_input").val();
  let username = $("#profile_username_input").val();
  let phone = $("#profile_phone_input").val();
  let gmail = $("#profile_email_input").val();
  let address = $("#profile_address_input").val();

  // loadUserInfo(id);
  window.location.reload();

  let sendingData = {
    id: id,
    name: name,
    phone: phone,
    gmail: gmail,
    address: address,
    username: username,
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
  // $("#head__profile_name").html("");
  // $("#profile_username_input").html("");

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
        $("#ursname").html(`User Name &nbsp; :- ${response["username"]}`);
        $("#head__profile_name").html(
          `<span class="icon"><i class="fa-solid fa-user"></i></span> ${response["username"]}`
        );
        $("#profile_phone_input").val(response["phone"]);
        $("#profile_email_input").val(response["gmail"]);
        $("#profile_username_input").val(response["username"]);
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

$("#updateForm").on("submit", UpdateUserProfile);
