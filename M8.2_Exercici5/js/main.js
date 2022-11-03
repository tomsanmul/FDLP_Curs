let Cinemes = [];
let Hospitals = [];
let Hotels = [];
let posicionActualCinemes = 0;
let posicionActualHospitals = 0;
let posicionActualHotels = 0;


function Crear() {
    let Tipus = prompt("Introdueix el tipus d'edifici que vols crear? (1-3): \n1. Hospital\n2. Hotel\n3. Cine ");
    let Nom, Plantes, Superficie, Malalts, Aforament;

    switch (Tipus) {
        case "1": { //CREAR HOSPITAL
            Nom = prompt("Introdueix el Nom de l'Hospital que vols crear: ");
            Plantes = prompt("Introdueix el numero de plantes que tindrà l'Hospital: ");
            Superficie = prompt("Introdueix la superfície de l'Hospital: ");
            Malalts = parseInt(prompt("Introdueix el nº de malalts: "));
            let hospital = new Hospital(Nom, Plantes, Superficie, Malalts);
            Hospitals.push(hospital);
            alert("S'ha creat correctament l'Hospital '" + Nom + "'");
            break;
        }
        case "2": { //CREAR HOTEL
            Nom = prompt("Introdueix el Nom de l'Hotel que vols crear: ");
            Plantes = prompt("Introdueix el numero de plantes que tindrà l'Hotel: ");
            Superficie = prompt("Introdueix la superfície de l'Hotel: ");
            Habitacions = parseInt(prompt("Introdueix el nº d'Habitacions: "));
            let hotel = new Hotel(Nom, Plantes, Superficie, Habitacions);
            Hotels.push(hotel);
            alert("S'ha creat correctament l'Hotel '" + Nom + "'");
            break;
        }
        case "3": { //CREAR CINE
            Nom = prompt("Introdueix el Nom del Cinema que vols crear: ");
            Plantes = prompt("Introdueix el numero de plantes que tindrà el Cinema: ");
            Superficie = prompt("Introdueix la superfície del Cinema: ");
            Aforament = parseInt(prompt("Introdueix l'aforament màxim del Cinema: "));
            let cinema = new Cine(Nom, Plantes, Superficie, Aforament);
            Cinemes.push(cinema);
            alert("S'ha creat correctament el Cinema '" + Nom + "'");
            break;
        }

        default: {
            alert("Operació cancelada");
            break;
        }


    }
}



function Eliminar() {
    let Nom;
    let Tipus = prompt("Introdueix el tipus d'edifici que vols eliminar? (1-3): \n1. Hospital\n2. Hotel\n3. Cine ");
    switch (Tipus) {
        case "1": { //ELIMINAR HOSPITAL
            Nom = prompt("Introdueix el Nom de l'Hospital que vols eliminar: ");
            posicionActualHospitals = -1; // por defecto, no lo encuentro
            encontrado = false;
            i = 0;
            while (i < Hospitals.length && !encontrado) {
                if (Nom == Hospitals[i].getnom()) {
                    encontrado = true;
                    posicionActualHospitals = i;
                    if (confirm("Confirma que desitja eliminar l'Hospital '" + Nom + "'?")) {
                        Hospitals.splice(posicionActualHospitals, 1);
                        alert("S'ha eliminat l'Hospital '" + Nom);
                    }
                }
                i++;
            }
            if (encontrado == false) {
                alert("No s'ha trobat cap Hospital amb el Nom: " + Nom);
            }
            break;
        }
        case "2": { //ELIMINAR HOTEL
            Nom = prompt("Introdueix el Nom de l'Hotel que vols eliminar: ");
            posicionActualHotel = -1; // por defecto, no lo encuentro
            encontrado = false;
            i = 0;
            while (i < Hotels.length && !encontrado) {
                if (Nom == Hotels[i].getnom()) {
                    encontrado = true;
                    posicionActualHotels = i;
                    if (confirm("Confirma que desitja eliminar l'Hospital '" + Nom + "'?")) {
                        Hotels.splice(posicionActualHotels, 1);
                        alert("S'ha eliminat l'Hospital '" + Nom);
                    }
                }
                i++;
            }
            if (encontrado == false) {
                alert("No s'ha trobat cap Hotel amb el Nom: " + Nom);
            }
            break;
        }
        case "3": { //ELIMINAR CINE
            Nom = prompt("Introdueix el Nom del Cinema que vols eliminar: ");
            posicionActualHotel = -1; // por defecto, no lo encuentro
            encontrado = false;
            i = 0;
            while (i < Cinemes.length && !encontrado) {
                if (Nom == Cinemes[i].getnom()) {
                    encontrado = true;
                    posicionActualCinemes = i;
                    if (confirm("Confirma que desitja eliminar el Cinema '" + Nom + "'?")) {
                        Cinemes.splice(posicionActualCinemes, 1);
                        alert("S'ha eliminat l'Hospital '" + Nom);
                    }
                }
                i++;
            }
            if (encontrado == false) {
                alert("No s'ha trobat cap Cinema amb el Nom: " + Nom);
            }
            break;
        }

        default: {
            alert("Operació cancelada");
            break;
        }


    }

}


function ParaBuscar() {

    let Tipus = prompt("Quin tipus d'edifici vols buscar? (1-3): \n1. Hospital\n2. Hotel\n3. Cine ");
    let Nom;
    let encontrado = false;
    let i;
    switch (Tipus) {

        case "1": {
            //ARRAY Hospitales
            posicionActualHospitals = -1; // por defecto, no lo encuentro
            encontrado = false;
            i = 0;
            Nom = prompt("Introdueix el Nom de l'Hospital que vols buscar: ");
            while (i < Hospitals.length && !encontrado) {
                if (Nom == Hospitals[i].getnom()) {
                    encontrado = true;
                    posicionActualHospitals = i;
                    document.getElementById("Nom").innerHTML = Hospitals[i].getnom();
                    document.getElementById("Plantes").innerHTML = Hospitals[i].getplantes();
                    document.getElementById("Superficie").innerHTML = Hospitals[i].getsuperficie();
                    document.getElementById("Neteja").innerHTML = Hospitals[i].netejar();
                    document.getElementById("Vigilancia").innerHTML = Hospitals[i].calcularCostVigilancia();
                    document.getElementById("Informacio").innerHTML = Hospitals[i].repartirDinar();

                }
                i++;
            }
            if (encontrado == false) {
                alert("No s'ha trobat cap Hospital amb el Nom: " + Nom);
            }
            break;


        }
        case "2": {
            //ARRAY Hoteles
            posicionActualHotels = -1; // por defecto, no lo encuentro
            encontrado = false;
            i = 0;
            let Nom = prompt("Introdueix el Nom de l'Hotel que vols buscar: ");
            while (i < Hotels.length && !encontrado) {
                if (Nom == Hotels[i].getnom()) {
                    encontrado = true;
                    posicionActualHotels = i;
                    document.getElementById("Nom").innerHTML = Hotels[i].getnom();
                    document.getElementById("Plantes").innerHTML = Hotels[i].getplantes();
                    document.getElementById("Superficie").innerHTML = Hotels[i].getsuperficie();
                    document.getElementById("Neteja").innerHTML = Hotels[i].netejar();
                    document.getElementById("Vigilancia").innerHTML = Hotels[i].calcularCostVigilancia();
                    document.getElementById("Informacio").innerHTML = "Cost Servei Habitacions: " + Hotels[i].serveiHabitacions();
                }
                i++;
            }
            if (encontrado == false) {
                alert("No s'ha trobat cap Hotel amb el Nom: " + Nom);
            }
            break;

        }
        case "3": {
            //ARRAY Cines
            posicionActualCinemes = -1; // por defecto, no lo encuentro
            encontrado = false;
            i = 0;
            Nom = prompt("Introdueix el Nom del Cinema que vols buscar: ");
            while (i < Cinemes.length && !encontrado) {
                if (Nom == Cinemes[i].getnom()) {
                    encontrado = true;
                    posicionActualCinemes = i;
                    document.getElementById("Nom").innerHTML = Cinemes[i].getnom();
                    document.getElementById("Plantes").innerHTML = Cinemes[i].getplantes();
                    document.getElementById("Superficie").innerHTML = Cinemes[i].getsuperficie();
                    document.getElementById("Neteja").innerHTML = Cinemes[i].netejar();
                    document.getElementById("Vigilancia").innerHTML = Cinemes[i].calcularCostVigilancia();
                    let preu = prompt("Introdueix el preu de les entrades: ");
                    let espectadors = 0;
                    let condicio = false;
                    //Controlamos que el nº de espectadores no supere al aforo máximo:
                    while (!condicio) {
                        espectadors = prompt("Introdueix el nombre d'espectadors: ");
                        if (espectadors > Cinemes[i].getaforament()) {
                            alert("El nombre d'espectadors introduït (" + espectadors + ") supera l'aforament màxim permés(" + Cinemes[i].getaforament() + "). Si us plau, introdueix un altre xifra menor.");
                            condicio = false;
                        } else {
                            condicio = true;
                        }
                    }
                    document.getElementById("Informacio").innerHTML = Cinemes[i].projectarSessio(preu, espectadors);
                }
                i++;
            }
            if (encontrado == false) {
                alert("No s'ha trobat cap Cinema amb el Nom: " + Nom);
            }
            break;
        }

        default: {
            alert("Operació cancelada");
            break;
        }

    }

}




function MostrarArrays() {
    //Esta función solo muestra en un alert todo el contenido del Array Clientes, es para pruebas básicamente
    let listaEdificos = "Edificis carregats en memòria:\n\nHOSPITALS:\n";
    for (let i = 0; i < Hospitals.length; i++) {
        listaEdificos += Hospitals[i].toString();
    }
    listaEdificos += "\nHOTELS:\n"
    for (let j = 0; j < Hotels.length; j++) {
        listaEdificos += Hotels[j].toString();
    }
    listaEdificos += "\nCINEMES:\n"
    for (let k = 0; k < Cinemes.length; k++) {
        listaEdificos += Cinemes[k].toString();
    }

    alert(listaEdificos);
    return listaEdificos;
}



function IniciaEdificis() {
    let hospital;
    let hotel;
    let cinema;

    hospital = new Hospital("Hospital de Vilafranca", "2", "1.950 m²", 26);
    Hospitals.push(hospital);
    hospital = new Hospital("Hospital General de Catalunya", "10", "25.350 m²", 315);
    Hospitals.push(hospital);

    hotel = new Hotel("Hotel Hilton", "22", "73.858 m²", 583);
    Hotels.push(hotel);
    hotel = new Hotel("Hotel Pepita", "23", "593 m²", 12);
    Hotels.push(hotel);

    cinema = new Cine("Cinema Montecarlo", "1", "3180 m²", 300);
    Cinemes.push(cinema);
    cinema = new Cine("Cinema Principal", "2", "12.450 m²", 1000);
    Cinemes.push(cinema);

    console.log(Hospitals);
    console.log(Cinemes);
    console.log(Hotels);

}



window.onload = function () {
    IniciaEdificis();
}