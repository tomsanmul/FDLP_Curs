class hotel {
    constructor(nombre, habitaciones, plantas, superficie) {
        this.nombre = nombre;
        this.habitaciones = habitaciones;
        this.plantas = plantas;
        this.superficie = superficie;
    }

    //Getters
    getNombre() {
        return this.nombre;
    }

    getHabitaciones() {
        return this.habitaciones;
    }

    getPlantas() {
        return this.plantas;
    }

    getSuperficie() {
        return this.superficie;
    }


    //Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setHabitaciones(habitaciones) {
        this.habitaciones = habitaciones;
    }

    setPlantas(plantas) {
        this.plantas = plantas;
    }

    setSuperficie(superficie) {
        this.superficie = superficie;
    }


    calcularManteniment() {
        const cost_persona = 1500;
        let persona = parseInt(this.habitaciones / 20);
        if (this.habitaciones % 20 >= 1) {
            persona++;
        };
        let coste = persona * cost_persona;
        let frase = persona + " persona/s. Cost Total: " + coste + "€";
        return frase;
    }



    toString() {
        let resultado = "DESCRIPCIÓ DE L'HOTEL:";
        resultado += "\nNom: " + this.nom;
        resultado += "\nHabitacions: " + this.habitaciones;
        resultado += "\nPlantas: " + this.plantas;
        resultado += "\nSuperficie: " + this.superficie;
        return resultado;
    }
}