<?php
session_start();

header("Content-type: application/json");

include "../config/conn.php";

function makeAppointment($conn){
    extract($_POST);

    $data = array();

    $query = "INSERT INTO `appointment`(`name`, `appintmentDay`, `hospital`, `description`, `phone`, `bloodType`) VALUES ('$name', '$appintmentDay', '$hospital', '$description', '$phone', '$bloodType')";

    $result = $conn->query($query);

    if($result){
        $data = array("status" => true, "data" => "Thank You For Making Appointment We Are waiting For You");
    }else{
        $data = array("status" => false, "data" => $conn->error);
    }

    echo json_encode($data);
}


if(isset($_POST['action'])){
    $action = $_POST['action'];
    $action($conn);
}else{
    echo json_encode(array("status" => false, "data" => "Action Is Required..."));
}

?>