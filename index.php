<?php
include 'dbh.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="hajlibrary.css" type="text/css">
    <link rel="stylesheet" href="index.css">
    <title>tasks</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>

<body>
    <h1>Weekly tasks</h1>
    <div style="width: 80%;color:red; display: inline-block;position: relative;">
        <h2>this week's to do</h2>


    </div>

    <form id="myForm">
        <table id="tbl2" cellspacing="3">

            <tr>

                <th>
                    this week
                </th>
                <th>
                    priority
                </th>
                <th>
                    status
                </th>
                <th>
                </th>

            </tr>
            <tr>
                <td>
                    <input type="text" required placeholder="this week" name="thisweekTodo">
                </td>
                <td>
                    <input type="text" required placeholder="priority" name="priorityTodo">
                </td>
                <td>
                    <input type="text" required placeholder="status" name="statusTodo">
                </td>
                <td>
                    <button class="tData" type="submit"> submit </button>

                </td>
            </tr>




        </table>
    </form>
    <table id="tbl" cellspacing="3">



    </table>
    <!-- ----------------------------------------- - -->
    <div style="width: 80%;color:red; display: inline-block;position: relative;">
        <h2>Next week's to do</h2>
    </div>
    <form id="myForm2">
        <table id="tbl3" cellspacing="3">

            <tr>

                <th>
                    Next week
                </th>
                <th>
                    priority
                </th>
                <th>
                    status
                </th>
                <th>
                </th>

            </tr>
            <tr>
                <td>
                    <input type="text" required placeholder="next week" class="nextweekTodo" name="nextweekTodo">
                </td>
                <td>
                    <input type="text" required placeholder="priority" class="nextPriority" name="nextPriority">
                </td>
                <td>
                    <input type="text" required placeholder="status" class="nextStatus" name="nextStatus">
                </td>
                <td>
                    <button class="ntData" type="submit"> submit </button>

                </td>
            </tr>




        </table>
    </form>
    <table id="tbl4" cellspacing="3">



    </table>

    <script src="nextWeek.js"></script>
    <script src="addRow.js">


    </script>
</body>

</html>