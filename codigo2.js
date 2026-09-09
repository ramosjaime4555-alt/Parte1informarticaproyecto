const carrucelElemento = document.getElementById(".carrucel-items");

let posicionMaximaDeDesplasamiento = carrucelElemento.scrollWidth - carrucelElemento.clientWidth;
let intervalDesplazamiento = null;
let pasoDesplazamiento = 1;

const iniciarDesplazamiento = () =>{
    intervalDesplazamiento = setInterval(function () {
        carrucelElemento.scrollLeft = carrucelElemento.scrollLeft + pasoDesplazamiento;
        if (carrucelElemento.scrollLeft === posicionMaximaDeDesplasamiento) {
            pasoDesplazamiento = pasoDesplazamiento * -1;
        } else if ( carrucelElemento.scrollLeft === 0) {
            pasoDesplazamiento = pasoDesplazamiento * -1
        }
    }, 10);
};

const detenerDesplazamiento = () => {
    clearInterval(intervalDesplazamiento);
};

carrucelElemento.addEventListener("mouseover", () => {
    detenerDesplazamiento();
});
carrucelElemento.addEventListener("mouseout", () => {
    iniciarDesplazamiento();
});

iniciarDesplazamiento();