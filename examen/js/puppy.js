class Puppy {
    constructor(raza, origen, alturaCm, pesoKg, pelo, colores, caracter, esperanzaVida, tipoMascota) {
        this.raza = raza;
        this.origen = origen;
        this.alturaCm = alturaCm;
        this.pesoKg = pesoKg;
        this.pelo = pelo;
        this.colores = colores;
        this.caracter = caracter;
        this.esperanzaVida = esperanzaVida;
        this.tipoMascota = tipoMascota;
    }


    //Getters
    getRaza() {
        return this.raza;
    }

    getOrigen() {
        return this.origen;
    }

    getAlturaCm() {
        return this.alturaCm;
    }

    getPesoKg() {
        return this.pesoKg;
    }

    getColores() {
        return this.colores;
    }

    getCaracter() {
        return this.caracter;
    }

    getEsperanzaVida() {
        return this.esperanzaVida;
    }

    getTipoMascota() {
        return this.tipoMascota;
    }



    //Setters
    setRaza(raza) {
        this.raza = raza;
    }

    setOrigen(origen) {
        this.origen = origen;
    }

    setAlturaCm(alturaCm) {
        this.alturaCm = alturaCm;
    }

    setPesoKg(pesoKg) {
        this.pesoKg = pesoKg;
    }

    setColores(colores) {
        this.colores = colores;
    }

    setCaracter(caracter) {
        this.caracter = caracter;
    }

    setEsperanzaVida(esperanzaVida) {
        this.esperanzaVida = esperanzaVida;
    }

    setTipoMascota(tipomascota) {
        this.tipoMascota = tipomascota;
    }


    toString() {
        let resultado = "OBJECTE PUPPY:";
        resultado += "\nRaza: " + this.raza;
        resultado += "\nOrigen: " + this.origen;
        resultado += "\nAlturaCm: " + this.alturaCm;
        resultado += "\nPesoKg: " + this.pesoKg;
        resultado += "\nPelo: " + this.pelo;
        resultado += "\nColores: " + this.colores;
        resultado += "\nEsperanzaVida: " + this.esperanzaVida;
        resultado += "\nTipoMascota: " + this.tipoMascota;

        return resultado;
    }

}