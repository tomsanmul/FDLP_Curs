class cliente {
    constructor(dni, nombre, apellidos) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cuentas = [];

    }

    //Getters
    getDni() {
        return this.dni;
    }

    getNombre() {
        return this.nombre;
    }

    getApellidos() {
        return this.apellidos;
    }


    //Setters
    setDni(dni) {
        this.dni = dni;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    toString() {
        let resultado = "\nDNI: " + this.dni + "   |   " + this.nombre + " " + this.apellidos + "   |      Nº Cuentas: " + this.cuentas.length;
        return resultado;
    }



    addCuenta(Objcuenta){
        let mensaje="";
        //Comprobamos que el cliente no tenga más de 5 cuentas. Ponemos este límite.
        if (this.cuentas.length < 5){
            this.cuentas.push(Objcuenta);      
            mensaje = "Número de Compte '" + this.cuentas[0].numCuenta + "'\n afegit correctament al client '" + this.nombre + " " + this.apellidos + "'.";
        }
        else
        {
            mensaje = "Límit de 5 comptes per cliente sobrepasat. No es por afegir més.";
        }

        return mensaje;
    }



    BuscarCuenta(numCuenta){
            let i=0;
            let encontrado = false;
            let indice = -1;
        if (this.cuentas.length > 0){
            while (i < this.cuentas.length && !encontrado){
                if (this.cuentas[i].numCuenta == numCuenta){
                    encontrado = true;
                    indice = i;
                }
                i++;
            }
        }
        else
        {
            indice = -1;
        }
        return(indice);

    }


}