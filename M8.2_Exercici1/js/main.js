let ordenadorUNO;
let ordenadorDOS;


function crearOrdinadors() {
   let marca, modelo, procesador, ram, hd;

      marca = prompt("Indica la marca del Ordinador UNO:", "Sony");
      modelo = prompt("Indica el Model del Ordinador UNO:", "Vaio");
      procesador = prompt("Tipus de procesador del Ordinador UNO:", "Intel");
      ram = prompt("Cuánta memoria RAM té l'Ordinador UNO?", "8Gb");
      hd = prompt("Cuánta capacitat de Disc Dur té l'Ordinador UNO?", "1Tb");

      ordenadorUNO = new ordinador(marca, modelo, procesador, ram, hd);
      console.log(ordenadorUNO);

      marca = prompt("Indica la marca del Ordinador DOS:", "Appel");
      modelo = prompt("Indica el Model del Ordinador DOS:", "McBook Air 13");
      procesador = prompt("Tipus de procesador del Ordinador DOS:", "Intel");
      ram = prompt("Cuánta memoria RAM té l'Ordinador UNO?", "16Gb");
      hd = prompt("Cuánta capacitat de Disc Dur té l'Ordinador DOS?", "2Tb");

      ordenadorDOS = new ordinador(marca, modelo, procesador, ram, hd);
      console.log(ordenadorDOS);


   }





function Executant(NumOrdenador) {
   for (let i = 1; i < 3; i++) {
      let programa = prompt("Introdueix el programa que s'està executant en el Ordinador " + i + ": ", "Chrome");
      if(NumOrdenador==1)
         {ordenadorUNO.Executant(programa);}
         else
         {ordenadorDOS.Executant(programa);}
   }
}

function GetMarca(NumOrdenador) {3
   let marca;
   if(NumOrdenador==1){
         marca = ordenadorUNO.getMarca();
      }
      else
      {
         marca = ordenadorDOS.getMarca();
      }
   alert("La marca de l'ordinador es: " + marca);
}


function GetModel(NumOrdenador) {
   let model;

   if(NumOrdenador==1){
      model = ordenadorUNO.getModelo();
   }
   else
   {
      model = ordenadorDOS.getModelo();
   }

   alert("El model de l'ordinador es: " + model);
}


function GetProcesador(NumOrdenador) {
   let procesador;
   if(NumOrdenador==1){
      procesador = ordenadorUNO.getProcesador();
   }
   else
   {
      procesador = ordenadorDOS.getProcesador();
   }

   alert("El processador de l'ordinador es: " + procesador);
}


function GetRam(NumOrdenador) {
   let ram;

   if(NumOrdenador==1){
      ram = ordenadorUNO.getRam();
   }
   else
   {
      ram = ordenadorDOS.getRam();
   }



   alert("El processador de l'ordinador es: " + ram);
}

function GetHd(NumOrdenador) {
   let hd;
   if(NumOrdenador==1){
      hd = ordenadorUNO.getHd();
   }
   else
   {
      hd = ordenadorDOS.getHd();
   }

   alert("El processador de l'ordinador es: " + hd);
}





function SetMarca(NumOrdenador) {
   let marca;
   if(NumOrdenador==1){
      marca = prompt("Introdueix la nova marca l'Ordinador " + NumOrdenador + ":", ordenadorUNO.getMarca());
      ordenadorUNO.SetMarca(marca);
   }
   else
   {
      marca = prompt("Introdueix la nova marca l'Ordinador " + NumOrdenador + ":", ordenadorDOS.getMarca());
      ordenadorDOS.SetMarca(marca);
   }

   alert("S'ha actualitzat la marca de l'Ordinador " + NumOrdenador );

}


function SetModel(NumOrdenador) {
   let modelo;
   if(NumOrdenador==1){
      modelo = prompt("Introdueix el nou model de l'Ordinador " + NumOrdenador + ":", ordenadorUNO.getModelo());
      ordenadorUNO.SetModel(modelo);
   }
   else
   {
      modelo = prompt("Introdueix el nou model de l'Ordinador " + NumOrdenador + ":", ordenadorDOS.getModelo());
      ordenadorDOS.SetModel(modelo);
   }

   alert("S'ha actualitzat el model de l'Ordinador " + NumOrdenador );
}


function SetProcesador(NumOrdenador) {
   let procesador;
   if(NumOrdenador==1){
      procesador = prompt("Introdueix el nou processador de l'Ordinador " + NumOrdenador + ":", ordenadorUNO.getProcesador());
      ordenadorUNO.SetProcesador(procesador);
   }
   else
   {
      procesador = prompt("Introdueix el nou processador de l'Ordinador " + NumOrdenador + ":", ordenadorUNO.getProcesador());
      ordenadorDOS.SetProcesador(procesador);
   }
   alert("S'ha actualitzat el processador de l'Ordinador " + NumOrdenador );

}


function SetRam(NumOrdenador) {
   let ram;
   if(NumOrdenador==1){
      ram = prompt("Introdueix la nova quantitat de memoria RAM de l'Ordinador " + NumOrdenador + ":", ordenadorUNO.getRam());
      ordenadorUNO.setRam(ram);
   }
   else
   {
      ram = prompt("Introdueix la nova quantitat de memoria RAM de l'Ordinador " + NumOrdenador + ":", ordenadorDOS.getRam());
      ordenadorDOS.setRam(ram);
   }
   alert("S'ha actualitzat la Memoria RAM de l'Ordinador " + NumOrdenador );

}

function SetHd(NumOrdenador) {
   let hd;
   if(NumOrdenador==1){
      hd = prompt("Introdueix la nova quantitat de Disc Dur de l'Ordinador " + NumOrdenador + ":", ordenadorUNO.getRam());
      ordenadorUNO.setHd(hd);
   }
   else
   {
      hd = prompt("Introdueix la nova quantitat de Disc Dur de l'Ordinador " + NumOrdenador + ":", ordenadorDOS.getRam());
      ordenadorDOS.setHd(hd);
   }
   alert("S'ha actualitzat la Memoria del Disc Dur de l'Ordinador " + NumOrdenador );
}



function Mostra(NumOrdenador) {
   if(NumOrdenador==1){
         alert(ordenadorUNO.toString());
      }
      else
      {
         alert(ordenadorDOS.toString());
      }
}