//$(document).ready(function () {   
//    $('#profesores').material_select();    
//});

function listarAsesores() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "ListarAsesores", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //$("#asesor").html("");
            console.log(this.responseText);
            $("#profesores").html("");
            $("#profesores").html(this.responseText);
            $('#profesores').material_select();
        }
    };
}

function guardarAsesoria() {
    var xhttp = new XMLHttpRequest();
    var p = $("#profesores").val();
    var m = $("#tema").val();
    var a = $('#msg').val();
    xhttp.open("POST", "GuardarAsesoria?tema="+m+"&msg="+a+"&profe="+p, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //$("#asesor").html("");
            window.location.reload();
        }
    };
}

function mostrarAsesor(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "MostrarAsesor", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //$("#asesor").html("");
            $("#asesor").html(this.responseText);
            console.log(this.responseText);
        }
    };
}

function showActa(){
    $("#actas").show();
}

function guardarActa() {
    var xhttp = new XMLHttpRequest();
    var nom=$("#nom_asesor").val();
    var p = $("#princ").val();
    var t = $("#temas").val();
    var r = $('#recomendaciones').val();
    xhttp.open("POST", "GuardarActa?tema="+p+"&temas="+t+"&reco="+r+"&nom="+nom, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //$("#asesor").html("");
            window.location.reload();
        }
    };
}

function logOut() {

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "LogOut");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        window.location.href = 'index.html';
    };
}
