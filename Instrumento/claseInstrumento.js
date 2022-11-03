class InstrumentoCuerda {
   // Esto es la plantilla
   constructor (tipo, marca, material, numeroCuerdas, color) {
      this.tipo = tipo;   // getTipo()  setTipo(tipo)
      this.marca = marca; // getMarca()  ...etc
      this.material = material;
      this.numeroCuerdas = numeroCuerdas;
      this.color = color;
   }

   getTipo(){
      return this.tipo;
   }

   setTipo(tipo) {
      const icuerda = ["Guitarra", "Arpa", "Cuatro", "Mandolina", "Tiple", "Ukelele"];
      let encontrado = false;      
      for (let i = 0; i<icuerda.length; i++) {
         if (tipo == icuerda[i]) {
            encontrado = true;
         }
      }   
      if (encontrado) {
         this.tipo = tipo;
      } else {
         alert("Lo siento, esto no es un instrumento de cuerda");
      }
   }

   tocarNota(nota) {
      alert("Se ha tocado la nota " + nota);
   }

   toString() {
      //Formatea la salida por pantalla de un objeto
      //Si no se crea, muestra la dirección de memoria del objeto
      let resultado = "INSTRUMENTO DE CUERDA";
      resultado += "\nTipo: " + this.tipo;
      resultado += "\nMarca: " + this.marca;
      resultado += "\nMaterial: " + this.material;
      resultado += "\nNumero Cuerdas: " + this.numeroCuerdas;
      resultado += "\nColor: " + this.color;
      return resultado;
   }



}