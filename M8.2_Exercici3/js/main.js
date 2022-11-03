let Clientes = [];
let ClienteActual = -1;   //Es la POSICIÓN en el Array

function Crear() {
    let dni = prompt("Introdueix el DNI del client: ");
    let resultado = Buscar(dni);
    if (dni != null) {
        if (resultado == -1) {

            let nombre = prompt("Introdueix el Nom del client: ");
            let apellidos = prompt("Introdueix els Cognoms del client: ");

            let client = new cliente(dni, nombre, apellidos);
            Clientes.push(client);
            console.log(Clientes);
            alert("S'ha afegit el client '" + nombre + " " + apellidos + "'");
        } else {
            alert("Ja existeix un client amb el DNI: " + dni);
        }
    }
    else
    {
        alert("Operació cancelada");
    }

}


function Eliminar() {
    let dni = prompt("Introdueix el DNI de la persona a eliminar:");
    let encontrado = Buscar(dni); // Me devuelve la posición en el array de clientes que tengo que eliminar. Si devuelve -1 es que no lo ha encontrado.
    if (encontrado == -1) {
        alert("No s'ha trobat el client amd DNI: " + dni);
    } else {
        if (confirm("Confirma que desitja eliminar el client '" + Clientes[encontrado].getNombre() + " " + Clientes[encontrado].getApellidos() + "' ?")) {

            alert("S'ha eliminat el client '" + Clientes[encontrado].getNombre() + " " + Clientes[encontrado].getApellidos() + "'");
            Clientes.splice(encontrado, 1);
        }

    }

}


function Buscar(dni) {
    let encontrado = false;
    let i = 0;
    ClienteActual = -1; // por defecto,
    while (i < Clientes.length && !encontrado) {
        if (dni == Clientes[i].dni) {
            encontrado = true;
            ClienteActual = i;
        }
        i++;
    }

    return ClienteActual;

}


function ParaBuscar() {
    let dni = prompt("Introdueix el DNI del client a buscar: ");
    if (dni != null) {
        let posicion = Buscar(dni);

        if (posicion == -1) {
            document.getElementById("Dni").innerHTML = "";
            document.getElementById("Nom").innerHTML = "";
            document.getElementById("Cognoms").innerHTML = "";
            ClienteActual = -1;
            alert("No s'ha trobat cap client amb el DNI: " + dni);

        } else {
            document.getElementById("Dni").innerHTML = Clientes[posicion].getDni();
            document.getElementById("Nom").innerHTML = Clientes[posicion].getNombre();
            document.getElementById("Cognoms").innerHTML = Clientes[posicion].getApellidos();
            MostrarCuentas();

        }

    }

    return ClienteActual;
}



function BuscarCuentaEnTodos(numCuenta) {
    let encontrado = false;
    let indiceCuenta = -1;
    let i = 0;

    while (i < Clientes.length && !encontrado) {
        indiceCuenta = Clientes[i].BuscarCuenta(numCuenta);
        if (indiceCuenta != -1) {
            encontrado = true;
        }
        i++;
    }
    return (indiceCuenta);

}


function MostrarCuentas() {
    //Esta función solo muestra el numero de cuentas y el saldo de un cliente por pantalla.
    // Primero Borramos las cuentas de la pantalla.
    document.getElementById("Comptes").innerHTML = "";
    let resultado = "";

    //Segundo mostramos las cuentas y el saldo del cliente

    for (let i = 0; i < Clientes[ClienteActual].cuentas.length; i++) {
        resultado += "Numero de Cuenta: " + Clientes[ClienteActual].cuentas[i].getNumCuenta() + "    /    Saldo: " + Clientes[ClienteActual].cuentas[i].getSaldo() + "<br>";
    }

    document.getElementById("Comptes").innerHTML = resultado;
}


function CrearCC() {
    if (ClienteActual == -1) {
        alert("Primer has de buscar un client ja donat d'alta per obril.li un compte.");
    } else {
        let mensaje;
        let numCuenta = prompt("Introdueix un numero de compte per afegir al client '" + Clientes[ClienteActual].getNombre() + " " + Clientes[ClienteActual].getApellidos() + "':");
        //Primero revisamos que este numero de cuneta no exista en todos los clientes

        if (numCuenta != null) {
            let resultado = BuscarCuentaEnTodos(numCuenta);

            if (resultado == "-1") {
                //Como no existe este numero de cuenta en todo el Array de Clientes, puedo crear añadir dicha cuenta al cliente en cuestión.
                mensaje = Clientes[ClienteActual].addCuenta(new cuenta(numCuenta));
            } else {
                mensaje = "El numero de compte introduït ja existeix en un altre client. No es pot afegir."

            }
            alert(mensaje);
        } else {
            alert("Operació de crear Compte cancelada.");
        }
        MostrarCuentas();
    }
}



function IngresaCC() {
    let resultado = "";
    let opciovalida = false;
    let numCuenta;
    let posicionNumCuenta = 0;
    let saldo = 0;

    if (ClienteActual == -1) {
        alert("Primer has de buscar un client per ingresar diners.");
    } else {
        let numeroCuentas = Clientes[ClienteActual].cuentas.length;
        if (Clientes[ClienteActual].cuentas.length == 0) {
            alert("Aquest client no té comptes. Crea-li primer un compte.");
        } else {
            if (numeroCuentas > 1) {
                for (let i = 0; i < numeroCuentas; i++) {
                    resultado += (i + 1) + ". Nº de Cuenta: " + Clientes[ClienteActual].cuentas[i].getNumCuenta() + "    /    Saldo: " + Clientes[ClienteActual].cuentas[i].getSaldo() + "\n";
                }

                do {
                    let opcio = prompt("Selecciona el compte on vols ingresar: (1 - " + numeroCuentas + "): \n\n" + resultado);
                    if (opcio > 0 && opcio <= numeroCuentas) {
                        numCuenta = Clientes[ClienteActual].cuentas[opcio - 1].getNumCuenta();
                        posicionNumCuenta = opcio - 1;
                        saldo = Clientes[ClienteActual].cuentas[opcio - 1].getSaldo();
                        opciovalida = true;
                    } else if (opcio == null) {
                        alert("Operació d'ingres cancelada.");
                        numCuenta = "-1"
                        opciovalida = true;
                    } else {
                        alert("Has de seleccionar un dels comptes llistats: (1 - " + numeroCuentas + ")");
                    }
                }
                while (!opciovalida);
            } else {
                //Si solo tiene 1 cuenta, no preguntamos y directamente añadimos ó retiramos.
                posicionNumCuenta = 0;
                numCuenta = Clientes[ClienteActual].cuentas[0].getNumCuenta();
                saldo = Clientes[ClienteActual].cuentas[0].getSaldo();

            }

            if (numCuenta != "-1") {

                quantitat = parseInt(prompt("Quants diners vols ingressar?"));
                if (isNaN(quantitat)) {
                    alert("Operació d'ingrés cancelada.");
                } else {
                    saldo += quantitat;
                    Clientes[ClienteActual].cuentas[posicionNumCuenta].setSaldo(saldo);
                    alert("Quantitat de " + quantitat + " € afegida correctamente al numero de compte: " + numCuenta);
                    MostrarCuentas();
                }
            }

        }





    }

}




function RetiraCC() {
    let resultado = "";
    let opciovalida = false;
    let numCuenta;
    let posicionNumCuenta = 0;
    let saldo = 0;

    if (ClienteActual == -1) {
        alert("Primer has de buscar un client per retirar diners.");
    } else {
        let numeroCuentas = Clientes[ClienteActual].cuentas.length;
        if (Clientes[ClienteActual].cuentas.length == 0) {
            alert("Aquest client no té comptes. Crea-li primer un compte.");
        } else {
            if (numeroCuentas > 1) {
                for (let i = 0; i < numeroCuentas; i++) {
                    resultado += (i + 1) + ". Nº de Cuenta: " + Clientes[ClienteActual].cuentas[i].getNumCuenta() + "    /    Saldo: " + Clientes[ClienteActual].cuentas[i].getSaldo() + "\n";
                }

                do {
                    let opcio = prompt("Selecciona el compte on vols retirar: (1 - " + numeroCuentas + "): \n\n" + resultado);
                    if (opcio > 0 && opcio <= numeroCuentas) {
                        numCuenta = Clientes[ClienteActual].cuentas[opcio - 1].getNumCuenta();
                        posicionNumCuenta = opcio - 1;
                        saldo = Clientes[ClienteActual].cuentas[opcio - 1].getSaldo();
                        opciovalida = true;
                    } else if (opcio == null) {
                        alert("Operació d'ingres cancelada.");
                        numCuenta = "-1"
                        opciovalida = true;
                    } else {
                        alert("Has de seleccionar un dels comptes llistats: (1 - " + numeroCuentas + ")");
                    }
                }
                while (!opciovalida);
            } else {
                //Si solo tiene 1 cuenta, no preguntamos, y directamente añadimos ó retiramos.
                posicionNumCuenta = 0;
                numCuenta = Clientes[ClienteActual].cuentas[0].getNumCuenta();
                saldo = Clientes[ClienteActual].cuentas[0].getSaldo();

            }

            if (numCuenta != "-1") {

                quantitat = parseInt(prompt("Quants diners vols retirar?"));
                if (isNaN(quantitat)) {
                    alert("Operació de retirada cancelada.");
                } else {
                    if (quantitat > saldo){
                        alert("No es pot retirar la quantitat de " + quantitat + " € perque no hi saldo suficient.");
                    }
                    else
                    if (quantitat < 0){
                        alert("Error, la quantitat a retirar no pot ser negativa.");
                    }
                    else
                    {
                    saldo = saldo - quantitat;
                    Clientes[ClienteActual].cuentas[posicionNumCuenta].setSaldo(saldo);
                    alert("Quantitat de " + quantitat + " € retirada correctament del numero de compte: " + numCuenta);
                    MostrarCuentas();
                    }
                }
            }

        }





    }

}




function MostrarArray() {
    //Esta función solo muestra en un alert todo el contenido del Array Clientes, es para pruebas básicamente
    let listaclientes = "Base de Dades de clients ja carregats en memòria:\n";
    for (let i = 0; i < Clientes.length; i++) {
        listaclientes += Clientes[i].toString();
    }
    alert(listaclientes);
    return listaclientes;
}



function IniciaClientes() {
    let Cliente;
    Cliente = new cliente("11111111A", "Carlos", "Sainz");
    Clientes.push(Cliente);
    Cliente = new cliente("22222222B", "Fernando", "Alonso");
    Clientes.push(Cliente);
    Cliente = new cliente("33333333C", "Luis", "Perez");
    Clientes.push(Cliente);
    Cliente = new cliente("44444444D", "Marc", "Gene");
    Clientes.push(Cliente);
    Cliente = new cliente("55555555E", "Jaime", "Alguersuari");
    Clientes.push(Cliente);


    Clientes[0].addCuenta(new cuenta('4857937495'));
    Clientes[2].addCuenta(new cuenta('4593463845'));
    Clientes[2].addCuenta(new cuenta('4085748756'));

    MostrarArray();

    console.log(Clientes);
}



window.onload = function () {
    IniciaClientes();
}