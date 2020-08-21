
//Typeof
/**Comentario
 * de 
 * vaias
 * lineas
 */
var numero = 92;
console.log('tipo de número: ' + typeof(numero));
var texto = 'hola';
console.log('tipo de texto: ' + typeof(texto));
var booleano = true;
console.log('tipo de booleano: ' + typeof(booleano));

console.log('Hola,  es un mje mio');

var decimal = 5/3;
console.log(decimal);
console.log(typeof(decimal));

var numero2 = 5/0;
console.log('Valor de numero2: ' + numero2);
console.log('Tipo de numero2: ' + typeof(numero2));

//Parsear (convertir) texto a numero
var numero3 = '123';
console.log('Tipo de numero3: ' + typeof(numero3));
var numero3Convertido = parseInt(numero3);
console.log('Tipo de numero 3 convertido: ' + typeof(numero3Convertido));

var numeroConfuso = '123ab';
var numeroConfusoConvertido = parseInt(numeroConfuso);
console.log('Valor de numero confuso convertido: ' + numeroConfusoConvertido); 


var numeroConfuso2 = 'ff123ab';
var numeroConfusoConvertido2 = parseInt(numeroConfuso2);
console.log('Valor de numero confuso convertido 2: ' + numeroConfusoConvertido2); 
console.log('Tipo de numero confuso convertido: ' + typeof(numeroConfusoConvertido2)); 

//Chequear (revisar) si algo es un NaN
console.log('numeroConfuso2 no es un numero? ' + isNaN(numeroConfusoConvertido2))
console.log('El 3 es un NaN? ' + isNaN(3));
// Numero a string

var numero4 = 2547;
console.log(numero4)
console.log(typeof(numero4))
console.log(numero4.toString());
console.log(typeof(numero4.toString()));

//confirmación

var confirmacion = confirm('Acepta las condiciones de uso?');
console.log(confirmacion);

//condicionales

if (confirmacion === true) {
    console.log('Has aceptado las condiciones!');
} else {
    console.log('no aceptaste');
}

//Operadores de comparación (>, <, >=, <=,!=, ==, ===, !==).
var edad = 15;
if (edad >= 18){
    console.log('Bienvendio al bar, que te quieres tomar?');
}else{
    console.log('Lo sentimos... No se acepta el ingreso a menores de edad');
}