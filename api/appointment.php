<?php
session_start();

header("Content-type: application/json");

include "../config/conn.php";

function makeAppointment($conn){
    extract($_POST);

    $data = array();

    $query = "INSERT INTO `appointment`(`name`, `appintmentDay`, `hospital`, `description`, `phone`, `bloodType`, `user_id`) VALUES ('$name', '$appintmentDay', '$hospital', '$description', '$phone', '$bloodType', '$userId')"; 

    $result = $conn->query($query);

    if($result){
        $data = array("status" => true, "data" => "Thank You For Making Appointment We Are waiting For You");
    }else{
        $data = array("status" => false, "data" => $conn->error);
    }

    echo json_encode($data);
}


function getAllAppointments($conn){
    extract($_POST);

    $data = array();
    $array_data = array();

    $query = " SELECT * FROM `appointment` ";

    $result = $conn->query($query);

    if($result){
        while($row = $result->fetch_assoc()){
            $array_data [] = $row;
        }

        $data = array("status" => true, "data" => $array_data);
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