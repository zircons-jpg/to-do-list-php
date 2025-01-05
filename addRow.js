var btn = document.getElementById("addRow");


var t = document.getElementById("tbl"), rIndex, cIndex;
var cells = t.getElementsByTagName('td');
var ajax = new XMLHttpRequest();
dbElements();

function dbElements() {
    ajax.open("GET", "data.php?tbl=thisweek&action=get", true);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            
            var data = JSON.parse(this.responseText);
            

            var html = "";
            for (var i = 0; i < data.length; i++) {
                var idTodo = data[i].idTodo;
                var thisweekTodo = data[i].thisweekTodo;
                var priorityTodo = data[i].priorityTodo;
                var statusTodo = data[i].statusTodo;

                html += "<tr id='" + idTodo + "'>";
                html += "<td style='width:0.5%;background-color:red;'></td>";
                html += "<td class='editMe' data-for='thisweekTodo' contentEditable='true'>" + thisweekTodo + "</td>";
                html += "<td class='editMe' data-for='priorityTodo' contentEditable='true'>" + priorityTodo + "</td>";
                html += "<td class='editMe' data-for='statusTodo' contentEditable='true'>" + statusTodo + "</td>";
                html += "<td class='delete' >delete</td>";
                html += "</tr>";
                // html += "<tr id='" + idTodo + "'>";
                // html += "<td style='width:0.5%;background-color:red;'></td>";
                // html += "<td class='edit' id='td_a' style='display:none;' contentEditable='true'>" + idTodo + "</td>";
                // html += "<td class='trr'  id='td_a' contentEditable='true'>" + thisweekTodo + "</td>";
                // html += "<td class='trr'  id='td_a' contentEditable='true'>" + priorityTodo + "</td>";
                // html += "<td class='trr'  id='td_a' contentEditable='true'>" + statusTodo + "</td>";
                // html += "<td class='delete' contentEditable='true'>delete</td>";
                // html += "</tr>";
            }

            document.getElementById("tbl").innerHTML = html;

            addEv();
            
        }

    }

}

$('#myForm').submit(function (e) {
    e.preventDefault();
    var f = $(this);
    console.log($('#myForm')[0]);
    var d = f.serialize();
    console.log(d);

    $.ajax({
        type: 'GET',
        url: "data.php?action=post&tbl=thisweek",
        data: d,
        success: function (response) {
            dbElements();
            $('#myForm')[0].reset();
        }
    });

});
function addEv() {

    $('.editMe').on('blur', function () {
        var column = $(this).attr('data-for');
        var id = $(this).parent().attr('id');
        $.ajax({
            type: 'GET',
            url: "data.php?action=put&tbl=thisweek&id=" + id + "&value=" + $(this).text() + "&cell=" + column,
            success: function (response) {
                console.log(response);
            }
        });
    });

    $('.delete').on('click', function () {
        var id = $(this).parent().attr('id');
        var el = $(this);
        if (!confirm("Sure?")) return;
        $.ajax({
            type: 'GET',
            url: "data.php?action=delete&tbl=thisweek&id=" + id,
            success: function (response) {
                el.parent().remove();
            }
        });
    });
}
/*function bringData(){
    $.ajax({
        type: 'GET',
        url: "/api/index.php?url=thisweek/5",
        success: function (response) {
            console.log(response);
        }
    });
}
bringData();*/






