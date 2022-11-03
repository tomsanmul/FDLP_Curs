function agregarImagen() {
       let Nom = prompt("Introduce un nombre:");
       let indice = buscar(Nom);

       if (indice == -1) {
              let Titul = prompt("Introduce el titulo:");
              let Descripcio = prompt("Introduce la descripción:");
              let Imatge = prompt("Introduce el nombre de la imgen:") + ".jpg";

              let coche = {
                     imagen: Imatge,
                     nombre: Nom,
                     title: Titul,
                     descripcion: Descripcio
              }

              imagenes.push(coche);
              posicionActual = imagenes.length - 1;
              mostrarImagen();
       } else {
              alert("El coche ( " + Nom + " ) ya existe.");
              posicionActual = indice;
              mostrarImagen();
       }
}




function encontrarImagen() {
       let varNombre = prompt("Indica el nombre de la imagen a mostrar:", "");
       let indice = buscar(varNombre);

       //let indice = imagenes.findIndex(imagen => imagen.nombre == varNombre);

       if (indice >= 0) {
              posicionActual = indice;
              mostrarImagen();
       } else {
              alert("La imagen ( " + varNombre + " ) no se encuentra.");
       }
}


function buscar(nombreImagen) {
       let encontrado = false;
       let elementos = imagenes.length;
       let i = 0;
       let indice = -1;

       while (i < elementos && !encontrado) {
              if (imagenes[i].nombre.toLowerCase() == nombreImagen.toLowerCase()) {
                     indice = i;
                     encontrado = true;
              }
              i++;
       }

       return indice;
}



function eliminarImagen() {
       let coche = imagenes[posicionActual].nombre;
       if (confirm("Estas seguro de que deseas eliminar el coche '" + coche + "' ?")) {
              imagenes.splice(posicionActual, 1);
              avanzar();
              mostrarImagen();
              alert("Se ha eliminado el coche '" + coche + "'");
       }
       return;
}


function modificarImagen() {
       let coche = imagenes[posicionActual];
       if (confirm("Estas seguro de que deseas modificar este coche '" + coche.nombre + "' ?")); {
              let Nom = prompt("Modifica el nombre:", coche.nombre);
              let Titul = prompt("Modifica el titulo:", coche.title);
              let Descripcio = prompt("Modifica la descripción:", coche.descripcion);
              let Imatge = prompt("Modifica el nombre de la imgen:", coche.imagen);

              let cocheParaModificar = {
                     imagen: Imatge,
                     nombre: Nom,
                     title: Titul,
                     descripcion: Descripcio
              }
              imagenes.splice(posicionActual, 1, cocheParaModificar);
              mostrarImagen();
              alert("Se ha modificado el coche '" + coche.nombre + "'");
       }
       return;
}