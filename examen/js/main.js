function p1() {
    let array1 = [];
    let array2 = [];

    for (let i = 100; i > 0; i--) {
        if (i % 5 == 0) { //Si es múltiplo de 5, lo metemeos en el Array1
            array1.push(i);
            if (i % 3 == 0) { //Una vez dentro el valor en Array1, si además es múltiplo de 3, lo metemos en Array2
                array2.push(i);
            }
        }

    }



    array2.reverse(); //Damos la vuelta al Array2 de forma descendente

    //Mostramos por pantalla en la seccion ID
    document.getElementById("array1").innerHTML = array1;
    document.getElementById("array2").innerHTML = array2;


}



function p2b() {
    //Busca els dades del gat 'Bombay' guardant el resultat de la cerca en un objecte anomenat puppy. Imprimiu l'objecte puppy a la consola en forma de taula.
    console.clear();
    let puppy = mascotas[0].razas[3];
    console.log(puppy);
}


function p2c() {
    console.clear();
    console.table(mascotas);

    //Extreu en un array anomenat gossos, les races de gossos de pèl curt. Mostra el nou array amb un alert.
    let gossos = [];
    let i = 0;
    let j = 0;

    while (i < mascotas.length) {
        if (mascotas[i].tipoMascota == "Perros") {
            while (j < mascotas[i].razas.length) {
                if (mascotas[i].razas[j].pelo == 'corto') {
                    gossos.push(mascotas[i].razas[j]);
                }
                j++;
            }
        }
        i++;
    }
    let texto = "Les races de gossos de pèl curt son:\n\n";

    for (i = 0; i < gossos.length; i++) {
        texto += gossos[i].raza + "\n";
    }
    alert(texto);

}

function p2e() {
    //Crea un objecte nou amb una nova raça de gat o gos, fent servir la classe Puppy. Mostra les dades de la nova mascota(toString()).

    let tipus = prompt("Introdueix quin tipus de mascota vols crear (gat/gos ....)", "gat");
    let raza = prompt("Introdueix el Nom: ");
    let origen = prompt("Introdueix l'origen: ");
    let alturaCm = prompt("Introdueix l'altura: ");
    let pesoKg = prompt("Introdueix el pes: ");
    let pelo = prompt("Introdueix el tipus de pèl: (curt / llarg)", "curt");
    let colores = prompt("Introdueix el color: ");
    let caracter = prompt("Introdueix el caràcter: ");
    let esperanzaVida = prompt("Introdueix la esperança de vida: ");

    let mascota = new Puppy(raza, origen, alturaCm, pesoKg, pelo, colores, caracter, esperanzaVida, tipus);
    console.log(mascota);

    alert(mascota.toString());


}