<?php
include 'dbh.php';


$tbl = $_GET['tbl'];
$action = $_GET['action'];


if ($action == "get") {

    $sql = "SELECT * FROM $tbl";

    $result = mysqli_query($conn, $sql);
    $data = array();
    while ($row = mysqli_fetch_object($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);
    exit();
} else if ($action == "post") {
    $thisweekTodo = $_GET['thisweekTodo'];
    $priorityTodo = $_GET['priorityTodo'];
    $statusValue = $_GET['statusTodo'];
    $sql = "INSERT INTO $tbl (thisweekTodo, priorityTodo, statusTodo)
    VALUES ('$thisweekTodo', '$priorityTodo', '$statusValue')";
    echo $sql;
    $result = mysqli_query($conn, $sql);



} else if ($action == "put") {
    $idTodo = $_GET['id'];
    $value = $_GET['value'];

    $sql = "UPDATE thisweek set `{$_GET['cell']}`='$value' where idTodo=$idTodo";
    $result = mysqli_query($conn, $sql);

} else if ($action == "delete") {
    $idTodo = $_GET['id'];

    $sql = "DELETE FROM thisweek WHERE idTodo=$idTodo";
    $result = mysqli_query($conn, $sql);
}


exit();
