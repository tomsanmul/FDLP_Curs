class Hotel extends Edifici {
    constructor(nom, plantes, superficie, habitacions) {
        super(nom, plantes, superficie);
        this.habitacions = habitacions;
    }

    serveiHabitacions() {
        const cost_persona = 1000;
        let persona = parseInt(this.habitacions / 20);  
        if (this.habitacions % 20 > 0) {
            persona++;
        };
        let coste = persona * cost_persona;
        let mensaje = "Es necessiten " + persona + " persona/s per mantenir l'Hotel. Cost Total mensual: " + coste + "€";
        return mensaje;
    }


    calcularCostVigilancia() {
        //Cada vigilant pot vigilar 1000m2 al dia
        //Cost vigilant: 1300 euros
        //A més tenen un plus de perillositat de 500 €
        const Sou = 1300;
        const Plus_Perillositat = 500;
        let superficie = this.superficie.replace(/[^0-9]+/g, "");
        let vigilantsNecessaris = parseInt(superficie / 3000);
        let resto = superficie % 3000;
        if (resto > 0) {
            vigilantsNecessaris++;
        }
        let Plus = vigilantsNecessaris * Plus_Perillositat;

        let mensaje = "Es necessiten " + vigilantsNecessaris + " vigilants al dia, i té un cost de " + parseInt((vigilantsNecessaris * Sou) + Plus) + "€ mensuals";

        return mensaje;


    }


    toString() {
        let resultado = this.nom + " | Plantes: " + this.plantes + " | Superficie: " + this.superficie + " | Habitacions: " + this.habitacions + "\n";
        return resultado;
    }
}



