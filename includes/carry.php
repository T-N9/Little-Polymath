<?php
    $dbServername="localhost";
    $dbUsername="root";
    $dbPassword="";
    $dbName="lpquestions";
    
    $conn=mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);
    mysqli_set_charset($conn,'utf8');

    $result1=mysqli_query($conn,"SELECT * FROM lpquestions");
    $data=array();
    while($row=mysqli_fetch_assoc($result1)){
    $data[]=$row;
    }
    echo json_encode($data);