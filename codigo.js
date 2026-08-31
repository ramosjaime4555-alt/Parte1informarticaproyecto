function acceder(){
    let ingreso_correo = document.getElementById("ingreso_correo").value;
    let ingreso_contraseña = document.getElementById("ingreso_contraseña").value;
    let confirmar_contraseña = document.getElementById("confirmar_contraseña").value;

    if (ingreso_contraseña == confirmar_contraseña && ingreso_correo != "" ){
        alert("Sea registrado con exito")
    }
    if (ingreso_contraseña != confirmar_contraseña){
        alert("La contraseña no coincide")
    }if(ingreso_contraseña == "" || ingreso_correo == "" || confirmar_contraseña == ""){
        alert("Uno o mas campos esta vacio")
    }
}