let contra = " ";
let correoinicio = " ";

function acceder(){
    let ingreso_correo = document.getElementById("ingreso_correo").value;
    let ingreso_contraseña = document.getElementById("ingreso_contraseña").value;
    let confirmar_contraseña = document.getElementById("confirmar_contraseña").value;

  
    if (ingreso_contraseña == "" || ingreso_correo == "" || confirmar_contraseña == ""){
        alert("Uno o más campos están vacíos");
        return; 
    }

   
    if (ingreso_contraseña == confirmar_contraseña){
        alert("Se ha registrado con éxito");
        contra = confirmar_contraseña;   
        correoinicio = ingreso_correo;    
        acceder.clear()
    } else {
        alert("No coincide la contraseña");
    }
}

function leerdatos(){
    console.log(contra);
    console.log(correoinicio);
}

function inicio(){
    let correo = document.getElementById("correo").value;
    let contraseña  = document.getElementById("contraseña").value;

    if (correo == correoinicio && contraseña == contra){
        alert("Puede pasar");
    } else {
        alert("Datos incorrectos");
    }
}