/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function login() {
    var user = $("#user").val();
    var psw = $("#psw").val();
    $.post("Login",{user:user,psw:psw}, function(result){
        console.log(result);
        if(result!=="error"){
            $("#rpta").append("<p style='color: green'>Login correcto</p>");
            
        }else{
            $("#rpta").append("<p style='color: red'>Login incorrecto</p>");
        }
    });
}

function registrar() {
    var user = $("#user").val();
    var psw = $("#psw").val();
    var nombre = $("#name").val();
//    $.ajax( { url: "https://api.mlab.com/api/1/databases/sw2/collections/usuarios?apiKey=qDp3t6eIDTXj_etsy2MGShdKI_dQLKgw",
//		  data: JSON.stringify(  { user: user,psw : psw, nombre : nombre} ),
//		  type: "POST",
//		  contentType: "application/json" } );
    $.post("Registrar",{user:user,psw:psw,nombre:nombre}, function(result){
        alert("¡Registro correcto!");
    });
}