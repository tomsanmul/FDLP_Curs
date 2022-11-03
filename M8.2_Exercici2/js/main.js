let Hoteles = [];
let posicionActual = 0;


function IniciaHoteles() {
   let Hotel;
   Hotel = new hotel("Plaza Lesseps", 21, 3, "1000m2");
   Hoteles.push(Hotel);
   Hotel = new hotel("Hilton", 200, 10, "10000m2");
   Hoteles.push(Hotel);
   Hotel = new hotel("Catalonia", 30, 5, "7000m2");
   Hoteles.push(Hotel);
   Hotel = new hotel("Princess", 40, 5, "7500m2");
   Hoteles.push(Hotel);
   Hotel = new hotel("Ayre", 30, 3, "500m2");
   Hoteles.push(Hotel);

   console.log(Hoteles);

   //Inicializo la muestra del 1er Hotel
   mostrarHotel();

}


function mostrarHotel() {
   if (Hoteles.length == 0) { //Si el array está vacío, limpio los campos.
      document.getElementById("Nombre").innerHTML = "";
      document.getElementById("Habitaciones").innerHTML = "";
      document.getElementById("Plantas").innerHTML = "";
      document.getElementById("Superficie").innerHTML = "";
      document.getElementById("Mantenimiento").innerHTML = "";
      document.getElementById("LongitudArray").innerHTML = Hoteles.length;

   } else { //sino los relleno con la información del objeto.
      document.getElementById("Nombre").innerHTML = Hoteles[posicionActual].nombre;
      document.getElementById("Habitaciones").innerHTML = Hoteles[posicionActual].habitaciones;
      document.getElementById("Plantas").innerHTML = Hoteles[posicionActual].plantas;
      document.getElementById("Superficie").innerHTML = Hoteles[posicionActual].superficie;
      document.getElementById("Mantenimiento").innerHTML = Hoteles[posicionActual].calcularManteniment();
      document.getElementById("LongitudArray").innerHTML = Hoteles.length;
   }
}



function Crear() {
   let Hotel;
   let nombre = prompt("Indica el Nom de l'Hotel: ");
   let existe = Buscar(nombre);
   if (existe == -1) { //Si NO exiset el Nombre del Hotel, lo creamos:
      let habitaciones = parseInt(prompt("Indica el nº d'habitacions de l'Hotel: "));
      let plantas = parseInt(prompt("Indica el nº de plantes de l'Hotel: "));
      let superficie = prompt("Indica la superfície de l'Hotel: ");

      Hotel = new hotel(nombre, habitaciones, plantas, superficie);
      console.log(Hotel);
      Hoteles.push(Hotel);
      console.log(Hoteles);

      alert("Se ha creado el hotel '" + nombre + "'");
      posicionActual = Hoteles.length - 1;
      mostrarHotel();
   } else {
      alert("El nombre de Hotel '" + nombre + "' ya existe. Introduce otro.");
   }

}



function Buscar(hotel) {
   let encontrado = false;
   let indice = -1;
   let i = 0;
   while (i < Hoteles.length && !encontrado) {
      if ((Hoteles[i].nombre).toLowerCase() == (hotel).toLowerCase()) {
         encontrado = true;
         indice = i;
      }
      i++;
   }
   return indice;

}


function ParaBuscar() {
   if (Hoteles.length > 0) {
      let hotel = prompt("Introduce el nombre del Hotel para Buscar: ");
      let indice = parseInt(Buscar(hotel));
      if (indice == -1) {
         alert("No se ha encontrado el hotel '" + hotel + "'");
      } else {
         posicionActual = indice;
         mostrarHotel();
      }
   } else {
      alert("No hay hoteles para Buscar. Introduce uno nuevo.");
   }
}



function Modificar() {
   if (Hoteles.length > 0) {
      let NombreHotel = Hoteles[posicionActual].nombre;
      if (confirm("Estas seguro de que deseas modificar el hotel '" + NombreHotel + "' ?")) {
         let opcion = prompt("Que deseas modificar? Elige una opción entre 1 y 4: \n\n(1) Nombre\n(2) Nº de Habitaciones\n(3) Nº de PLantas\n(4) La Superficie. ");
         switch (opcion) {
            case '1': {
               let nombre = prompt("Modifica el Nombre del Hotel: ", Hoteles[posicionActual].nombre);
               Hoteles[posicionActual].setNombre(nombre);
               break;
            }
            case '2': {
               let habitaciones = parseInt(prompt("Modifica el nº d'habitacions de l'Hotel: ", Hoteles[posicionActual].habitaciones));
               Hoteles[posicionActual].setHabitaciones(habitaciones);
               break;
            }
            case '3': {
               let plantas = parseInt(prompt("Modifica el nº de plantes de l'Hotel: ", Hoteles[posicionActual].plantas));
               Hoteles[posicionActual].setPlantas(plantas);
               break;
            }
            case '4': {
               let superficie = prompt("Modifica la superfície de l'Hotel: ", Hoteles[posicionActual].superficie);
               Hoteles[posicionActual].setSuperficie(superficie);
               break;
            }
            default: {
               alert("No elegiste una opción correcta entre (1-4). Vuelve a intentarlo.");
               return;
            }
         }

         console.log(Hoteles);
         alert("Se ha modificado el hotel '" + NombreHotel + "'");
         mostrarHotel();
      }
   } else {
      alert("No hay hoteles para modificar. Introduce uno nuevo.");
   }
   return;
}


//Originalmente hice el modificar con "splice", sustituyendo el objeto entero. Luego lo modifiqué arriba para hacerlo con Setters.
/*
function Modificar() {
   if (Hoteles.length > 0) {
      let HotelParaModificar;
      let NombreHotel = Hoteles[posicionActual].nombre;
      if (confirm("Estas seguro de que deseas modificar el hotel '" + NombreHotel + "' ?")) {
         let nombre = prompt("Modifica el Nombre del Hotel: ", Hoteles[posicionActual].nombre);
         let habitaciones = parseInt(prompt("Modifica el nº d'habitacions de l'Hotel: ", Hoteles[posicionActual].habitaciones));
         let plantas = parseInt(prompt("Modifica el nº de plantes de l'Hotel: ", Hoteles[posicionActual].plantas));
         let superficie = prompt("Modifica la superfície de l'Hotel: ", Hoteles[posicionActual].superficie);

         HotelParaModificar = new hotel(nombre, habitaciones, plantas, superficie);
         Hoteles.splice(posicionActual, 1, HotelParaModificar);
         console.log(Hoteles);
         alert("Se ha modificado el hotel '" + NombreHotel + "'");
         mostrarHotel();
      }
   } else {
      alert("No hay hoteles para modificar. Introduce uno nuevo.");
   }
   return;
}
*/

function Eliminar() {
   if (Hoteles.length > 0) {
      let hotel = Hoteles[posicionActual].nombre;
      if (confirm("Estas seguro de que deseas eliminar el hotel '" + hotel + "' ?")) {
         Hoteles.splice(posicionActual, 1);
         avanzar();
         mostrarHotel();
         alert("Se ha eliminado el hotel '" + hotel + "'");
      }
   } else {
      alert("No hay hoteles para eliminar. Introduce uno nuevo.");
   }
   return;
}




function avanzar() {
   posicionActual++;
   //Si está en la última posicion y avanza, volvemos a 0;
   if (posicionActual > Hoteles.length - 1) {
      posicionActual = 0;
   }
   mostrarHotel();
}


function retroceder() {
   posicionActual--;
   //Si está en la primera posicion y retrocede, volvemos a la última.
   if (posicionActual < 0) {
      posicionActual = Hoteles.length - 1;
   }
   mostrarHotel();

}



window.onload = function () {
   IniciaHoteles();
};