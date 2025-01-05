$(function () {
    $.get("http://localhost/todolist/api/nextweek/", function (data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
            var idNext = data[i].idNext;
            var nextweekTodo = data[i].nextweekTodo;
            var nextPriority = data[i].nextPriority;
            var nextStatus = data[i].nextStatus;

            html += "<tr id='" + idNext + "'>";
            html += "<td style='width:0.5%;background-color:red;'></td>";
            html += "<td class='editMe' data-for='thisweekTodo' contentEditable='true'>" + nextweekTodo + "</td>";
            html += "<td class='editMe' data-for='priorityTodo' contentEditable='true'>" + nextPriority + "</td>";
            html += "<td class='editMe' data-for='statusTodo' contentEditable='true'>" + nextStatus + "</td>";
            html += "<td class='delete' >delete</td>";
            html += "</tr>";

        }

        document.getElementById("tbl4").innerHTML = html;


    },'json');
});

$('#myForm2').submit(function (e) {
    e.preventDefault();
    var f = $(this);
    console.log(f);
    var d = f.serialize();

    var nextweekTodo = $('.nextweekTodo').val();
    var nextPriority = $('.nextPriority').val();
    var nextStatus = $('.nextStatus').val();

    $.post("http://localhost/todolist/api/nextweek",{nextweekTodo: nextweekTodo,nextPriority: nextPriority,nextStatus: nextStatus}
    ,function(data){
       console.log("data" + data);
       $(function () {
        $.get("http://localhost/todolist/api/nextweek/", function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                var idNext = data[i].idNext;
                var nextweekTodo = data[i].nextweekTodo;
                var nextPriority = data[i].nextPriority;
                var nextStatus = data[i].nextStatus;
    
                html += "<tr id='" + idNext + "'>";
                html += "<td style='width:0.5%;background-color:red;'></td>";
                html += "<td class='editMe' data-for='thisweekTodo' contentEditable='true'>" + nextweekTodo + "</td>";
                html += "<td class='editMe' data-for='priorityTodo' contentEditable='true'>" + nextPriority + "</td>";
                html += "<td class='editMe' data-for='statusTodo' contentEditable='true'>" + nextStatus + "</td>";
                html += "<td class='delete' >delete</td>";
                html += "</tr>";
    
            }
    
            document.getElementById("tbl4").innerHTML = html;
    
    
        },'json');
    });
    $('#myForm2')[0].reset();
    }),'json';

});






