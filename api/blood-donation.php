<?php
header("Content-type: application/json");
include "../config/conn.php";


function registerUser($conn){
    extract($_POST);

    $data = array();

    $query = "CALL register_user_sp('', '$fullName', '$userType', '$bloodType', '$gmail', '$userName', '$password', '$confirmPass', '$address', '$gender', '$phone')";

    $result = $conn->query($query);

    if($result){
        $data = array("status" => true, "data" => "Registered SuccessFully ✅");
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