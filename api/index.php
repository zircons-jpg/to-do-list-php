<?php
header("Conten-Type: application/json");
include '../dbh.php';


$action = $_SERVER['REQUEST_METHOD'];
$nodes = explode("/", $_GET['url']);
$tbl = $nodes[0];
$id = $nodes[1];


if ($action == 'GET') {
    if ($id) $sql = "SELECT * FROM $tbl where idNext=$id order by idNext";
    else $sql = "SELECT * FROM $tbl order by idNext";

    $result = mysqli_query($conn, $sql);
    $data = array();
    while ($row = mysqli_fetch_object($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);
    exit();
} else if ($action == 'POST') {
    $nextweekTodo = $_POST['nextweekTodo'];
    $nextPriority = $_POST['nextPriority'];
    $nextStatus = $_POST['nextStatus'];
    $sql = "INSERT INTO $tbl (nextweekTodo, nextPriority, nextStatus)
    VALUES ('$nextweekTodo', '$nextPriority', '$nextStatus')";

    $result = mysqli_query($conn, $sql);
}

