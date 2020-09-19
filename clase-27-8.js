


// EJERCICIO 1: STOP.
/*
let numAcumulados=[];
let num;

while(num !== 'stop'){
    num = prompt('ingrese numero');
    numAcumulados.push(num);
    console.log(numAcumulados);

}
numAcumulados.pop();

console.log(numAcumulados);
alert('Los numeros ingresados son: ' + numAcumulados.join('-') + ' a bailar!') ;
*/

//EJERCICO 2: DIVIDIR ARRAYS
/*
let numPares = [];
let numImpares = [];
let noNumericos = [];
let num;

while(parseInt(num) !== 0){
    num = prompt('Ingrese cualquier caracter');
    if(num % 2 === 0){
    numPares.push(num);
    
    } 
    if(num % 2 !== 0 && !isNaN(num)){
        numImpares.push(num);
        
    }
    if(isNaN(num)){
        noNumericos.push(num);
        
    }

    
}
numPares.pop();
alert('Los numeros ingresados pares son: ' + numPares.join('-'));

alert('Los numeros ingresados impares son: ' + numImpares.join('-'));

alert('Los no numéricos son: ' + noNumericos);
*/

//EJERCICIO 3: ELIMINAR EXTREMOS

let listaNumeros = [];
let numIngresado;


while(parseInt(numIngresado) !== 0){
    numIngresado = prompt ('Ingrese numero');
    listaNumeros.push(numIngresado);
    console.log('Los numeros ingresados son: ' + listaNumeros);
    listaOrdenada = listaNumeros.sort();
    console.log('La lista en orden de menor a mayor es incluyendo cero es: ' + listaOrdenada);
}
console.log(listaOrdenada)
listaOrdenada.shift();
console.log('Lista de numeros ingresados sin cero: ' + listaOrdenada)

listaOrdenada.pop();
console.log('Lista de números Eliminando al mayor y al menor: ' + listaOrdenada);
//Error: detecta el 0 como numero menor. //Resuelto.
//________________________________________________



//EJERCICIO 4 : DIVIDIR ARRAYS
/*
let i = 0;
let primerArray = [];
let arrayUno = [];
let arrayDos = [];
let arrayTres = []; 
let num;

while(num !== "0"){
    num = prompt('Ingrese numero');
    primerArray.push(num);
    
}
arrayUno = primerArray.slice(0, 3);
console.log('Array Uno: ' + arrayUno);

arrayDos = primerArray.splice(6, 3); 
console.log('Array Dos: ' + arrayDos);

arrayTres = primerArray.splice(3, 3);
console.log('Array Tres: ' + arrayTres);
 */

