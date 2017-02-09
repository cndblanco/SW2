/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function showStudent(){
    $("#icon_teacher").css('background-color', 'transparent');
    $("#icon_student").css('background-color', '#ff8c00');
    $("#teacher").hide();
    $("#reg_student").hide();
    $("#student").show(1000);
}

function showTeacher(){
    $("#icon_student").css('background-color', 'transparent');
    $("#icon_teacher").css('background-color', '#ff8c00');
    $("#student").hide();
    $("#reg_teacher").hide();
    $("#teacher").show(1000);    
}

function showRegStudent(){
    $("#icon_teacher").css('background-color', 'transparent');
    $("#icon_student").css('background-color', '#ff8c00');
    $("#student").hide();
    $("#reg_student").show(1000);
}

function showRegTeacher(){
    $("#icon_student").css('background-color', 'transparent');
    $("#icon_teacher").css('background-color', '#ff8c00');
    $("#teacher").hide();
    $("#reg_teacher").show(1000);
}

function loginStd() {
    var user = $("#user_std").val();
    var psw = $("#psw_std").val();
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
            //document.getElementById("rpta").innerHTML = "<p style='color: green'>Login correcto</p>";
        } else if (this.responseText === "error") {
            alert("Usuario no registrado o datos incorrectos");
        }
    };
}

function loginTeacher() {
    var user = $("#user").val();
    var psw = $("#psw").val();
    $.get("Login",{user:user,psw:psw}, function(result){
        console.log(result);
        if(result!=="error"){
            $("#rpta").append("<p style='color: green'>Login correcto</p>");
            
        }else{
            $("#rpta").append("<p style='color: red'>Login incorrecto</p>");
        }
    });
//    $.post("Login",
//        {user:user,psw:psw},
//        function(data,status){
//            alert("Data: " + data + "\nStatus: " + status);
//        });
//    var xhttp = new XMLHttpRequest();
//    
//    xhttp.open("POST", "Login?user=" + user + "&psw=" + psw, true);
//    xhttp.send();
//    xhttp.onreadystatechange = function () {
//        if (this.responseText !== "error") {
//            console.log(this.responseText);
//            document.getElementById("rpta").innerHTML = "<p style='color: green'>Login correcto</p>";
//        } else if (this.responseText === "error") {
//            alert("Usuario no registrado o datos incorrectos");
//        }
//    };
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