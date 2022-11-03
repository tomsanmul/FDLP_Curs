class ordinador {
    constructor(marca, modelo, procesador, ram, hd) {
        this.marca = marca;
        this.modelo = modelo;
        this.procesador = procesador;
        this.ram = ram;
        this.hd = hd;
    }

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getProcesador(){
        return this.procesador;
    }

    getRam(){
        return this.ram;
    }

    getHd(){
        return this.hd;
    }



    setMarca(marca) {
        this.marca = marca;
    }

    setModel(modelo) {
        this.modelo = modelo;
    }

    setProcesador(procesador){
        this.procesador = procesador;
    }

    setRam(ram){
        this.ram = ram;
    }

    setHd(hd){
        this.hd = hd;
    }






    Executant(programa) {
        alert("En aquests moments s'està executant: '" + programa + "'");
     }

     
    toString() {
        let resultado = "DESCRIPCIÓ DE L'ORDINADOR:";
        resultado += "\nMarca: " + this.marca;
        resultado += "\nModel: " + this.modelo;
        resultado += "\nProcesador: " + this.procesador;
        resultado += "\nQuantitat de memòria RAM: " + this.ram;
        resultado += "\nQuantitat de memòria Disc Dur: " + this.hd;
        return resultado;

     }
}