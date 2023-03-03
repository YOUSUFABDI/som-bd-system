<?php

$conn = new mysqli("localhost", "root", "", "somali-blood-donation-system");

if($conn->connect_error){
    echo $conn->error;
}else     {
       echo "connect succesfully";
}


?>