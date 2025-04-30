document.getElementById('act').style.display = 'none';
var objPersona = {ced:'', nom: '', ape: '', dir: '', tel: '', email: null };
var myArray = [];

function guardarDatos(){
    objPersona.ced = document.getElementById('ced').value;
    objPersona.nom = document.getElementById('nom').value;
    objPersona.ape = document.getElementById('ape').value;
    objPersona.dir = document.getElementById('dir').value;
    objPersona.tel = document.getElementById('tel').value;
    objPersona.email = document.getElementById('cor').value;
    let resultado=JSON.parse(JSON.stringify(objPersona));
    myArray.push(resultado);
    limpiarCajas();
    mostrarDatos();
}
function limpiarCajas(){
    document.getElementById('ced').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('ape').value = '';
    document.getElementById('dir').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('ced').focus();
}   



function mostrarDatos(){
    var salida= "";
    for( j in myArray){
        salida += "<tr><td>" + myArray[j].ced + "</td><td>"+
        myArray[j].nom + "</td><td>" +
        myArray[j].ape + "</td><td>" + 
        myArray[j].dir + "</td><td>" +
        myArray[j].tel + "</td><td>" +
        myArray[j].email + "</td><td>" +

        "<button onclick='editarDatos("+j+")'>Editar</button></td><td>" +
        "<button onclick='eliminarDatos("+j+")'>Eliminar</button></td></tr>";

    }

    document.getElementById('cuerpoTAbla').innerHTML = salida;
}

function editarDatos(index){

}

function eliminarDatos(index){

}

