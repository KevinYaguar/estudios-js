var arrayNumerosIngresados = [];
let primerNumero = []; 
var numeroIngresado;
arrayNumerosIngresados.push(numeroIngresado);
primerNumero.push(numeroIngresado);
console.log('Primero numero: ' + primerNumero);
console.log('Primero array: ' + arrayNumerosIngresados);
function obtenerNumero(){
    numeroIngresado = parseInt(prompt('Ingrese un numero'));
}
obtenerNumero();
if(numeroIngresado > 10){

    arrayNumerosIngresados.shift();
    obtenerNumero();
    arrayNumerosIngresados.push(numeroIngresado);
    if(numeroIngresado > 100){
        alert('A');
    } else{
        alert('B');
    }
} else{
    arrayNumerosIngresados.shift();
    obtenerNumero();
    arrayNumerosIngresados.push(numeroIngresado);
    if(numeroIngresado > 1000){
        alert('C');
    } else{
        alert('D');
    }
}
console.log('Primero numero: ' + primerNumero);
