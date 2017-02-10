/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function search() {

    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("listaTesis");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
function listarTesis(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "ListarTesis", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            $("#listaTesis").html("");
            $("#listaTesis").html(this.response);
            
        }
    };
}

