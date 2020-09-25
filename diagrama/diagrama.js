var ultimoNumero = [];
var primerNumero = [];
var arrayTodosLosNumerosIngresados = [];

let inputUno = document.getElementById('first-number');
let inputDos = document.getElementById('second-number');

setTimeout(function numTwo () {
    inputDos.value ;
}, 6000);

/*
let numeroIngresado1 = inputUno.value;
let numeroIngresado2 = inputDos.value;
*/ //Preguntar porque esto no funciona. Resulta vacio. (basado en clase10-09.js)
var resultado = document.getElementById('resultado');

let button = document.getElementById('button');
button.addEventListener('click', obtenerNumero1);



setTimeout(function resolucion (){
    let mi_promesa = new Promise ((resolve, reject) => {
        if(inputDos.value > 0){
            resolve (obtenerNumero1());
        } else {
            reject ( resultado.value = 'El segundo numero esta vacio');
        }
    });
}, 7000);

//

function obtenerNumero1() {
    inputUno.value;
    primerNumero.push(inputUno.value); //No funcionan no se por qué.
    ultimoNumero.push(inputUno.value); //No funcionan no se por qué.
    arrayTodosLosNumerosIngresados.push(inputUno.value);
    if (inputUno.value > 10) {

        ultimoNumero.shift();
        
        arrayTodosLosNumerosIngresados.push(inputDos.value);
        ultimoNumero.push(inputDos.value);
        if (inputDos.value > 100) {
            resultado.value = 'A';
        } else {
            resultado.value = 'B';
        }
    } else {
        ultimoNumero.shift();
        
        arrayTodosLosNumerosIngresados.push(inputDos.value);
        ultimoNumero.push(inputDos.value);
        if (inputDos.value > 1000) {
            resultado.value = 'C';
        } else {
            resultado.value = 'D';
        }
    }

}
//consoles sin funcionar
console.log('Primer numero: ' + primerNumero);
console.log('Ultimo Numero: ' + ultimoNumero);
console.log('Todos los numeros ingresados: ' + arrayTodosLosNumerosIngresados.join(' y '));