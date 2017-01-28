/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function login() {
    var user = $("#user").val();
    var psw = $("#psw").val();
//    $.get("Login",{user:user,psw:psw}, function(result){
//        console.log(result);
//        if(result!=="error"){
//            $("#rpta").append("<p style='color: green'>Login correcto</p>");
//            
//        }else{
//            $("#rpta").append("<p style='color: red'>Login incorrecto</p>");
//        }
//    });
//    $.post("Login",
//        {user:user,psw:psw},
//        function(data,status){
//            alert("Data: " + data + "\nStatus: " + status);
//        });
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "Login?user=" + user + "&psw=" + psw, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.responseText !== "error") {
            console.log(this.responseText);
            document.getElementById("rpta").innerHTML = "<p style='color: green'>Login correcto</p>";
        } else if (this.responseText === "error") {
            alert("Usuario no registrado o datos incorrectos");
        }
//        } else {
//            alert("Usuario no registrado o datos incorrectos");
//        }
    };
}

function registrar() {
    var user = $("#user").val();
    var psw = $("#psw").val();
    var nombre = $("#name").val();

//    $.post("Registrar", {user: user, psw: psw, nombre: nombre}, function (result) {
//        alert("¡Registro correcto!");
//    });
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("POST", "Registrar?user=" + user + "&psw=" + psw + "&nombre=" + nombre, true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("rpta").innerHTML = "<p style='color: green'>Registro correcto</p>";
            $("#user").val("");
            $("#psw").val("");
            $("#name").val("");
        }
    };
}