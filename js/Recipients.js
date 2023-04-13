loadRecipients();

function loadRecipients() {
  let sendingData = {
    action: "getAllRecipients",
  };

  $.ajax({
    method: "POST",
    dataType: "JSON",
    url: "../api/donors-recipients.php",
    data: sendingData,
    success: function (data) {
      let status = data.status;
      let response = data.data;

      let tr = "";

      if (status) {
        response.forEach((res) => {
          tr += "<tr>";
          for (let i in res) {
            tr += `<td> <span>${res[i]}</span> </td>`;
          }
          tr += "</tr>";
        });
        $("#recipientsTable").append(tr);
      }
    },
    error: function (data) {
      console.log(data);
    },
  });
}
