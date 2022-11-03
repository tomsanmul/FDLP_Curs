class Punto {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }


    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    setPosX(posX) {
        this.posX = posX;
    }

    setPosY(posY) {
        this.posY = posY;
    }


}

class Circulo {
    constructor(centro, radio) {
        this.centro = centro;
        this.radio = radio;
    }

    distanciaCentres(altreCercle) {
        // Retorna la distància entre el centre del cercle actual i el rebut com a paràmetre.
        let difx2 = (this.centro.posX - altreCercle.centro.posX)**2;
        let dify2 = (this.centro.posY - altreCercle.centro.posY)**2;
        let distancia = Math.sqrt(difx2 + dify2);
        return distancia.toFixed(2);
    }

    equals(altreCercle) {
        //Retorna "SI" si dos cercles són iguals (si tenen el mateix centre i el mateix radi).
        
        let Decisio = "NO";
        if ( (this.centro.posX == altreCercle.centro.posX) && (this.centro.posY == altreCercle.centro.posY) && (this.radio == altreCercle.radio) ){
            Decisio = "SI";
        }
        return Decisio;
    }

    sonConcentrics(altreCercle) {
        // Retorna "SI"  si dos cercles són concèntrics (tenen igual centre).

          let Decisio = "NO";
          if ( (this.centro.posX == altreCercle.centro.posX) && (this.centro.posY == altreCercle.centro.posY)){
            Decisio = "SI";
          }
          return Decisio;

    }

    tenenIgualRadi(altreCercle) {
        //Retorna "SI" si dos cercles tenen el mateix radi.

        let Decisio = "NO";
        if (this.radio == altreCercle.radio){
          Decisio = "SI";
        }
        return Decisio;
    }

    sonTangents(altreCercle) {
        //Retorna "SI" si dos cercles són tangents, és a dir,
        //Si la distancia entre els seus centres es igual a la sumna del seus radis.

        let Decisio = "NO";
        let distancia = this.distanciaCentres(altreCercle);

        if (distancia == (this.radio + altreCercle.radio)){
          Decisio = "SI";
        }
        return Decisio;


        
    }

    sonSecants(altreCercle) {
        //Retorna true si dos cercles són secants, és a dir:
        //Si la distancia en els seus centres es trova entre la resta dels seus radis i la suma dels seus radis.

        let Decisio = "NO";
        let distancia = this.distanciaCentres(altreCercle);

        //resta radios
        let resta = this.radio - altreCercle.radio;

        //suma radis
        let suma = this.radio + altreCercle.radio;

        if (distancia > resta && distancia < suma){
          Decisio = "SI";
        }
        return Decisio;


         
    }

    noEsToquen(altreCercle) {
        //Retorna true si dos cercles no es toquen.
        // Dos cercles no es toquen si la distancia entre els seus centres es mes gran a la suma dels seus radis.

        let Decisio = "NO";
        let distancia = this.distanciaCentres(altreCercle);

        if (distancia < (this.radio + altreCercle.radio)){
          Decisio = "SI";
        }
        return Decisio;

    }

}