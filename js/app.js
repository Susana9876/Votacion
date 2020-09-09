//referenciar elementos
const terminarBoton = document.getElementById('terminar_boton');
const favor = document.getElementById('favor');
const contra = document.getElementById('contra');
const abs = document.getElementById('abs');
const pregunta = document.getElementById('pregunta');
const etiquetaFavor = document.getElementById('favor_label');
const etiquetaContra = document.getElementById('contra_label');
const etiquetaAbs = document.getElementById('abs_label');
botonFavor = document.getElementById('favor_btn');
botonContra = document.getElementById('contra_btn');
botonAbs = document.getElementById('abs_btn');


//inicializar variables y objetos
let objeto = new Pregunta();
objeto.texto = "¿Qué opinas del aborto?";
pregunta.innerHTML = objeto.texto;



//inicializar eventos
botonFavor.addEventListener('click', addFavor);
terminarBoton.addEventListener('click', showMessage);

botonContra.addEventListener('click', addContra);
terminarBoton.addEventListener('click', showMessage);

botonAbs.addEventListener('click', addAbs);
terminarBoton.addEventListener('click', showMessage);



//logica de eventos
function addFavor(){
    objeto.masFavor();
    // etiquetaFavor.innerHTML = objeto.favor;
}

function addContra(){
    objeto.masContra();
    // etiquetaContra.innerHTML = objeto.contra;
}

function addAbs(){
    objeto.masAbs();
    // etiquetaAbs.innerHTML = objeto.abs;
}




function showMessage(){
    var msj = "Total de votos a favor:" + " " + objeto.favor + "\n" + "Total de votos en contra:" + " " + objeto.contra + "\n" + "Total de votos abstención:" + " " + objeto.abs;
    window.alert(msj);
}


