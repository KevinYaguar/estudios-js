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
variable suma 
i = canidad de veces

ingrese edad
es la edad 0?
No, suma + edad ingresada
ingrese otra edad 
es la edad 0? 
No, suma + edad ingresada
ingrese otra edad 
es la edad 0? 
si
rompe ciclo y calcula
*/
var edadIngresada; //undefinded
var mayoresDeEdad = 0;

do{
    edadIngresada = parseInt(prompt('ingrese edad'));

    if(edadIngresada >= 18){
        mayoresDeEdad++; 
    }
    
    
}while(edadIngresada!==0)

alert(' El total de mayores  es  ' + mayoresDeEdad);



