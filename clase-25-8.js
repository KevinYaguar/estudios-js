/*
const USUARIO = "Alejandro";
const CONTRASEÑA = "123456";

do{
    alert('le vamos a solicitar su usario y contraseña')
    var usuarioIngresado = prompt('ingrese su suario');
    var contraseñaIngresado = prompt('ingrese contraseña');
}while(usuarioIngresado !== USUARIO || contraseñaIngresado !== CONTRASEÑA)

alert('Bienvenido ' + usuarioIngresado);
*/

/* SUMA Y PROMEDIO
var suma = 0;
var cantidadMax = 5;

for (var i = 1; i <= cantidadMax; i++){
    var numeroIngresado = prompt('Igrese numero')
    suma = suma + parseInt(numeroIngresado);
}
 alert('los numeros ingresados suman ' + suma)
 alert('el promedio de los numeros ingresador es de ' + suma/cantidadMax);
*/

// EJERCICIO 3: EDADES
/*
var edadIngresada; //undefinded
var mayoresDeEdad = 0;

do{
    edadIngresada = parseInt(prompt('ingrese edad'));

    if(edadIngresada >= 18){
        mayoresDeEdad++; 
    }
    
    
}while(edadIngresada!==0)

alert(' El total de mayores  es  ' + mayoresDeEdad);
console.log(mayoresDeEdad)
*/

// EJERCICIO 4: PROMEDIO CONDICIONAL
/*
var numero;
var cantidadNumIngresados = 0;
var numerosMenoresSuma = 0;
do{
    var numero = prompt('ingrese un numero');
    if(numero <10){
        cantidadNumIngresados++;
        console.log('La cantidad de numeros de un digito ingresadors es ' + cantidadNumIngresados);
        numerosMenoresSuma = numerosMenoresSuma + (parseInt(numero) );
        console.log('La suma de los numeros de un digito es ' + numerosMenoresSuma);
        console.log('El promedio de los numeros de un digito ingresados es de ' + (numerosMenoresSuma/cantidadNumIngresados)); 
    }
}while(numero !== 'salir')
alert('El promedio de los numeros de un digito ingresados es de ' + (numerosMenoresSuma/cantidadNumIngresados));
*/

//Ejercicio PARES E IMPARES

var pares = 0;
var impares =  0;

do{
    var numeroIngresado = parseInt(prompt('Ingrese un numero'));
    if(numeroIngresado % 2 === 0){
        var pares = pares + numeroIngresado;
        console.log('La suma de los numeros pares es ' + pares);
    } else{
        var impares = impares + numeroIngresado;
        console.log('La suma de los numeros impares es ' + impares);
    }
    

}while(numeroIngresado !== 0)
if(pares>impares){
    alert('Los pares tienen más ingresos que los impares');
} else {
    alert('Los impares tienen más ingresos que los pares');
}


//Ejercicio DE NUMEROS A LETRAS
/*
var numeroIngresado = parseInt(prompt('Ingrese un número del 1 al 10'));

switch (numeroIngresado) {
    case 1:
    alert('a');
    break;
    case 2:
    alert('b');
    break;
    case 3:
    alert('c');
    break;
    
    case 4:
    alert('d');
    break;
    case 5:
    alert('e');
    break;
    case 6:
    alert('f');
    break;
    case 7:
    alert('g');
    break;
    case 8:
    alert('h');
    break;
    case 9:
    alert('i');
    break;
    case 10:
    alert('j');
    break;
    default:
        alert('El numero ingresado no es valido')
}
*/