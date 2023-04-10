<?php
session_start();

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

function login($conn){
    extract($_POST);

    $data = array();
    $array_data = array();

    $query = "CALL login_sp('$username', '$password')";
    $result = $conn->query($query);

    if($result){
        $row = $result->fetch_assoc();

        if(isset($row['msg'])){
            if($row['msg'] == 'Deny'){
                $data = array("status" => false, "data" => "Username Or Password Is Incorrect 🙅‍♂️");
            }else{
                $data = array("status" => false, "data" => "User Locked By The Admin");
            }
        }else{
            foreach($row as $key=>$value){
                $_SESSION[$key] = $value;
            }
            $data = array("status" => true, "data" => "Logged In SuccessFully 👌");
        }
    }else{
        $data = array("status" => false, "data" => $conn->error);
    }

    echo json_encode($data);
}

function update_user($conn){
    extract($_POST);

    $data = array();

    $query = " UPDATE users set fullName = '$name', phone = '$phone', gmail = '$gmail', username = '$username', address = '$address' WHERE id = '$id'";

    $result = $conn->query($query);

    if($result){
        $data = array("status" => true, "data" => "Updated SuccessFully ✅");
    }else{
        $data = array("status" => false, "data" => $conn->error);
    }

    echo json_encode($data);
}

function get_users_info($conn){
    extract($_POST);

    $data = array();
    $array_data = array();

    $query = "SELECT * FROM users WHERE id = '$id'";

    $result = $conn->query($query);
    if($result){
        $row = $result->fetch_assoc();

        $data = array("status" => true, "data" => $row);
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