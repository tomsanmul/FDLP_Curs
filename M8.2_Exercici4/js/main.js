let Cercles = [];

function Calcula(){
    //llegim les dades desde la pagina i les afegim a la clase

    let posX1 = parseInt(document.getElementById("PosX1").value);
    let posY1 = parseInt(document.getElementById("PosY1").value);
    let radio1 = parseInt(document.getElementById("Radio1").value);
    let circulo1 = new Circulo(new Punto(posX1,posY1), radio1);

    let posX2 = parseInt(document.getElementById("PosX2").value);
    let posY2 = parseInt(document.getElementById("PosY2").value);
    let radio2 = parseInt(document.getElementById("Radio2").value);
    let circulo2 = new Circulo(new Punto(posX2,posY2), radio2);

    
    let resultat; 

    resultat = circulo1.distanciaCentres(circulo2);
    document.getElementById("resultatdistancia").innerHTML = "La distància entre els dos cercles es de: " + resultat;

    resultat = circulo1.equals(circulo2);
    document.getElementById("SonIguals").innerHTML = "Els dos cercles " + resultat + " son iguals";

    resultat = circulo1.sonConcentrics(circulo2);
    document.getElementById("SonConcentrics").innerHTML = "Els dos cercles " + resultat + " son concentrics.";

    resultat = circulo1.tenenIgualRadi(circulo2);
    document.getElementById("TenenIgualRadi").innerHTML = "Els dos cercles " + resultat + " tenen igual radi.";

    resultat = circulo1.sonTangents(circulo2);
    document.getElementById("SonTangents").innerHTML = "Els dos cercles " + resultat + " son tangents.";

    resultat = circulo1.sonSecants(circulo2);
    document.getElementById("SonSecants").innerHTML = "Els dos cercles " + resultat + " son secants.";

    resultat = circulo1.noEsToquen(circulo2);
    document.getElementById("NoEsToquen").innerHTML = "Els dos cercles " + resultat + " es toquen.";

    

}