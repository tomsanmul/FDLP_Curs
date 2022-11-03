document.getElementById("tema").innerHTML = TEMA;
let posicionActual = 0;
mostrarImagen();


function mostrarImagen(){
    let imagen = RUTA + imagenes[posicionActual].imagen;

    let nombre = imagenes[posicionActual].nombre;
    let titulo = imagenes[posicionActual].title;
    let descripcion = imagenes[posicionActual].descripcion;

    document.getElementById("imagen").src = imagen;
    document.getElementById("imagen").title = titulo;
    document.getElementById("imagen").alt = nombre;

    document.getElementById("nombreImagen").innerHTML = nombre;
    document.getElementById("desc").innerHTML = descripcion; 
        
}


function avanzar(){
    posicionActual++;
    //Si está en la última posicion y avanza, volvemos a 0;
    if (posicionActual > imagenes.length - 1){
        posicionActual = 0;
    }
    
    mostrarImagen();
}


function retroceder(){
    posicionActual--;
    //Si está en la primera posicion y retrocede, volvemos a la última.
    if (posicionActual < 0){
        posicionActual = imagenes.length - 1;
    }
    mostrarImagen();

}


const INTERVALO_MILISEGUNDOS = 2000;

function play(){
    intervalo = setInterval(avanzar, INTERVALO_MILISEGUNDOS);    
}

function stop(){
    clearInterval(intervalo);
}
