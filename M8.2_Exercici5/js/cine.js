class Cine extends Edifici {
    constructor(nom, plantes, superficie, aforament) {
        super(nom, plantes, superficie);
        this.aforament = aforament;
    }

    getaforament(){
        return this.aforament;
    }

    projectarSessio(asistents, preu) {
        let mensaje;
        if (asistents > this.aforament) {
            mensaje = "El número d’assistents a la sessió no pot ser més gran que l’aforament total de la sala.";
        } else {
            let total = parseInt(asistents) * parseFloat(preu);
            mensaje = "S’han recaptat " + total.toFixed(2) + " Euros";
        }
        return mensaje;
    }


    calcularCostVigilancia() {
        //Cada vigilant pot vigilar 3000m2 al dia
        //Cost vigilant: 1300 euros
        const SOU = 1300;
        let superficie = this.superficie.replace(/[^0-9]+/g, "");
        let vigilantsNecessaris = parseInt(superficie / 3000);
        let resto = superficie % 3000;
        if (resto > 0) {
            vigilantsNecessaris++;
        }

        let mensaje = "Es necessiten " + vigilantsNecessaris + " vigilants al dia, i té un cost de " + parseInt((vigilantsNecessaris * SOU)) + "€ mensuals";

        return mensaje;


    }


    toString() {
        let resultado = this.nom + " | Plantes: " + this.plantes + " | Superficie: " + this.superficie + " | Aforo: " + this.aforament + "\n";
        return resultado;
    }
}