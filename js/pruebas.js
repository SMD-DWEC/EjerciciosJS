'use strict';

function suma(a=1,b=1) {
    return a+b;
}

function escribe() {
    document.write("hola");
}

//Ejecuta una función cuando termine de ejecutar la pila (callstack) ejecutará
//la función llamada (callback)
function ejecuta(callback) {
    callback();
}



ejecuta(escribe)

let array = [
    [1,2,3],
    [4,5,6]
];

console.log(array);

//Pruebas DNI

//objeto
let dni = undefined;

do {
    dni = prompt("Introduce un DNI");

    //Si el último caracter del DNI es una A o una Z
    if(!(dni.substring(dni.length-1) >= 'A' && dni.substring(dni.length-1)<='Z'))
        console.error("No has puesto la ultima letra del DNI");
    if(dni.length <10) console.error("El DNI tiene un formato incorrecto");

} while(dni.length <10 || dni.length > 10);

console.log("Tu DNI es: "+ dni.substring(0,9) +" y la ultima letra de tu DNI es: "+dni.substring(dni.length-1));

//objeto - diferencia entre llaves y corchetes
let persona = { 
    nombre: "test",
    apellido: "test2",
    dni: dni
}

console.log(persona);