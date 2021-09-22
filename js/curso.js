'use strict';

console.log("Js cargado");

//Objetos
let objeto = {
    atributo1: 78,
    nombre: 'Perico Palotes',
    parejas: ['Maria', 'Pedro', 'Macario'],
    metodo2: function(num) { //Esto es una funcion de primer nivel
        console.log("Metodo 2: "+(num*2));
    }
}

console.log(objeto);
console.log("Me llamo " +objeto.nombre);
console.log("Una de mis parejas es: "+ objeto.parejas[1]);

//Funciones
function funcion1() {
    document.write("Me encanta JavaScript <br \>");
}
funcion1();

//Los objetos pueden ser funciones también.

let num = 7; //Declaro num y le asigno 7, tipo number.
num = funcion1; //Le asigno funcion1 ahora es tipo function.
num(); //La ejecuto.

//Ahora a objeto le he creado un atributo, que este mismo va a ejecutar una función.
objeto.metodo = funcion1;
objeto.metodo();

//Las funciones son objetos.
objeto.metodo2(2);

//Parametros de funciones.
function suma(a,b = 4) {
    return(a+b);
}
console.log(suma(2,2));

//Con un solo valor (a), ya que JS permite valores por defecto
console.log(suma(2));
console.log(suma()); // undefined + 2 = NaN

function ejecuta(callback) {
    console.log("Ejecutando...");
    callback();
}
//Función de callback, es decir, cuando vuelva del callstack (pila) esto es lo que ejecutará
//El parametro de callback NO es una palabra reservada, se le puede poner cualquier nombre
//de variable. Callback es el nombre que se le suele poner en estos casos (de llamar una función a través de otra).
ejecuta(funcion1);

//Excepciones

try {
    let num1 = "test";
    console.log(num1* 'Zapato'); //va a dar un error de tipo (Naan)
   // ejecuta(funcion2); // Esto va a dar un error de que NO está definido.

    let nombre = "test";
    console.log("E: "+nombre.substr(2,4));

} catch(excepcion) {
    console.error("Catch: "+ excepcion);

} finally {
    console.log("Ejecuto finally, esto SIEMPRE se ejecuta");
}

//Arrays
let vector = [1,2,3];
let guarreria = [1,2,'1adsasdasda', function(){console.log("pff")},true];
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz);

for(let i=0;i<matriz.length;i++) {
    console.log(matriz[i])
}

//foreach
for(let elemento of vector) { //Recorre un vector.
    console.log(elemento)
}

for(let atributo in objeto) { //Recorre los ATRIBUTOS de un objeto
  //  console.log("El atributo \'"+atributo+"\' vale " + objeto[atributo])
  console.log(`El atributo "${atributo}" vale  ${objeto[atributo]}`) //Comillas americanas.
}

let matriz2 = [
    [1,2,3],
    [4,5,6,14,18,20],
    [7,8,9]
];

for(let fila of matriz2) {
    for(let elemento of fila) 
        console.log(elemento)
    
}