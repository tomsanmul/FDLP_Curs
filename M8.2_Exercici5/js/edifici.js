class Edifici {
    constructor(nom, plantes, superficie) {
        this.nom = nom;
        this.plantes = plantes;
        this.superficie = superficie;
    }

    getnom() {
        return this.nom;
    }

    getplantes() {
        return this.plantes;
    }

    getsuperficie() {
        return this.superficie;
    }

    netejar() {
        //Per cada minut de neteja es paga 1 Euro
        //1 minut dona per netejar 5 mm2.
        //S'ha de sumar 0,5 minuts mes per pujar a cada planta. 
        let superficie = this.superficie.replace(/[^0-9]+/g, "");
        let minutsNecessaris = superficie / 5;
        let resto = superficie % 5;
        if (resto > 0) {
            minutsNecessaris++;
        }

        let plantes = this.plantes.replace(/[^0-9]+/g, "");
        let minutsAdicionals = plantes * 0.5;

        minutsNecessaris = minutsNecessaris + minutsAdicionals;

        let mensaje = minutsNecessaris + "€ al dia. " + (minutsNecessaris * 30) + "€ al mes."

        return mensaje;
    }

    calcularCostVigilancia() {
        //Cada vigilant pot vigilar 1000m2 al dia
        //Cost vigilant: 1300 euros
        const SOU = 1300;
        let superficie = this.superficie.replace(/[^0-9]+/g, "");
        let vigilantsNecessaris = parseInt(superficie / 1000);
        let resto = superficie % 1000;
        if (resto > 0) {
            vigilantsNecessaris++;
        }

        let mensaje = "Es necessiten " + vigilantsNecessaris + " vigilants al dia, i té un cost de " + parseInt((vigilantsNecessaris * SOU)) + "€ mensuals.";

        return mensaje;


    }


}