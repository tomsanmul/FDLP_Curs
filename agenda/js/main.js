function f11() {
    console.clear();
    console.table(agenda);
}

function f12() {
    console.clear();
    //alert(agenda[0].contactos[3]);
    console.table(agenda[0].contactos[3]);
}

function f13() {
    console.clear();
    console.table(agenda[1]);
}

function f21() {
    let j;
    let servicio = prompt("Que servicio quieres buscar?");
    let encontrado = false;
    let elementos = agenda.length;
    let hallado=false;
    let i = 0;


    while (i < elementos && !encontrado) {
        j=0;
        while (j < agenda[i].contactos.length && !hallado){
            if (agenda[i].contactos[j].contacto == servicio) {
                alert("contacto: " + agenda[i].contactos[j].contacto + '\n' + "numeroTelefono: " + agenda[i].contactos[j].numeroTelefono + '\n' + "web: " + agenda[i].contactos[j].web);
                encontrado = true;
                hallado = true;
             }
            j++;
        } 
        i++;
    }
}


function f22() {
    let encontrado = false;
    let elementos = agenda[0].contactos.length;
    let i = 0;
    while (i < elementos && !encontrado) {
        if (agenda[0].contactos[i].contacto == "Cruz Roja") {
            alert("La página web de la Cruz Roja es: " + '\n' + agenda[0].contactos[i].web);
            encontrado = true;
        }
        i++;
    }
}

function f23() {
    let encontrado = false;
    let elementos = agenda[1].contactos.length;
    let i = 0;
    while (i < elementos && !encontrado) {
        if (agenda[1].contactos[i].contacto == "Mastercard") {
            alert("contacto: " + agenda[1].contactos[i].contacto + '\n' + "numeroTelefono: " + agenda[1].contactos[i].numeroTelefono + '\n' + "web: " + agenda[1].contactos[i].web);
            encontrado = true;
        }
        i++;
    }
}
