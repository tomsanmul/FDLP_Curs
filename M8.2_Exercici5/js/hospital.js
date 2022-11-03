class Hospital extends Edifici {
    constructor(nom, plantes, superficie, malalts, racions) {
        super(nom, plantes, superficie);
        this.malalts = malalts;
        this.racions = 3;
    }

    getracions() {
        return this.racions;
    }

    setracions(racions) {
        this.racions = racions;
    }

    repartirDinar() {
        return "S’estan repartint " + this.malalts * this.racions + " racions.";
    }

    toString() {
        let resultado = this.nom + " | Plantes: " + this.plantes + " | Superficie: " + this.superficie + " | Malalts: " + this.malalts + "\n";
        return resultado;
    }
}
