function acceder(){
    let ingreso_correo = document.getElementById("Ingreso_correo").value;
    let ingreso_contraseña = document.getElementById("Ingreso_de_contra").value;
    let confirmar_contraseña = document.getElementById("Ingreso_de_confirmacion").value;

    if (ingreso_contraseña == confirmar_contraseña ){
        alert("Sea registrado con exito")
    }
}
function inicio(){

}