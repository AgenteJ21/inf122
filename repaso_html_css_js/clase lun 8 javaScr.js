var encontrado = colores.find(function (elemento){ 
    return elemento === "rojo"; 
});
/* devuelve elemento */


var elemento = colores.findIndex(function (elemento){
    return elemento === 1;
});
/* devuelve posicion de elemento*/


var elemento = colores.find(function (elemento){
    return elemento === true;
});

/*----------------------------------------------------------------*/

function saludar(nombre){
    return "Hola "+nombre+"!";
}

const mensaje = saludar("Diego");

/*-----------------------------------------------------------------*/
function suma(n1,n2){
    return n1+n2;
}

const res = suma(5,3);

/* ------------------obtener elemento por id--------------------- */
getElementById(id);

/* ------------------crear nuevo elemento------------------------ */
createElement("...(etiqueta html)");