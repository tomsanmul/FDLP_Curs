class cuenta{
    constructor(numCuenta){
        this.numCuenta = numCuenta;
        this.saldo = 0;
    }


      //Getters
getNumCuenta() {
        return this.numCuenta;
    }

getSaldo() {
        return this.saldo;
    }


    //Setters
setNumCuenta(numCuenta) {
     this.numCuenta = numCuenta;
}

setSaldo(saldo) {
    this.saldo = saldo;
}



ingresar(cantidad){
    let mensaje;

    return (mensaje);
}


retirar(){
    let mensaje;

    return (mensaje);
}



toString(){
    let resultado = "";
    resultado += this.numCuenta + ': €' + this.saldo.toFixed(2);
}


}