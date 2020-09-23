/*var kilometros = prompt('Cuántos kilometros desea recorrer?');
var distaciaTotalConUnTanque = 45*15;
var cantidadDeReabastecimientos = Math.ceil(kilometros/distaciaTotalConUnTanque) -1 ;

if(kilometros <= distaciaTotalConUnTanque){
    alert('Puedes recorres la distancia sin reabastecerte');
} else {
    alert('Tendrás que reabasterte el camino');
}

alert('Necesitarás reabastecer combustible ' + cantidadDeReabastecimientos + ' veces'); */

/*


--------------------------------------------
// MODELOS DE AUTOS 

var motor1 = 15; //km x litro
var motor2 = 12;
var motor3 = 10;


var modelo = prompt('Indique el modelo de su auto');
var kilometros = prompt('Indique los kilometros que va a realizar');
var cargaMaxima  = 50; //litros


if(modelo == 1.6){
    var consumo = motor1;
    var litrosUtilizados = kilometros/consumo;
    var tanquesNecesarios = Math.ceil(litrosUtilizados/cargaMaxima);
    alert('Usted necesita ' + tanquesNecesarios + ' tanques para realizar el recorrido');
} else if(modelo == 1.8){
    var consumo = motor2;
    var litrosUtilizados = kilometros/consumo;
    var tanquesNecesarios = Math.ceil(litrosUtilizados/cargaMaxima);
    alert('Usted necesita ' + tanquesNecesarios + ' tanques para realizar el recorrido');
} else if(modelo == 2.0){
    var consumo = motor3;
    var litrosUtilizados = kilometros/consumo;
    var tanquesNecesarios = Math.ceil(litrosUtilizados/cargaMaxima);
    alert('Usted necesita ' + tanquesNecesarios + ' tanques para realizar el recorrido');
}
---------------------------------------------------------
*/

// RADIO

/*
var radio = prompt('Ingrese un dial impar entre 89.9 y 107.8');
var verificacionImpar = radio % 2;
if(verificacionImpar < 1){
    alert('Por favor, Ingrese un dial impar');
} 

if(radio >= 107.9){
    alert('Por favor, ingrese un dial entre 89.9 y 107.8');
}
if(radio < 89.9){
    alert('Por favor, ingrese un dial entre 89.9 y 107.8');
}
-------------------------------------------------------------
*/

//BANCO

var dinero = prompt('ingrese la cantidad de dinero que quiere transferir');
var destinatario = prompt('Ingrese destinatario');
var dineroDisponible = 100000;
var destinatarioExistente = 'Marcos';
var destinatarioExistente2 = 'Juana';
var destinatarioExistente3 = 'Alex';

if(dinero < dineroDisponible){
    if(destinatario == destinatarioExistente || destinatario == destinatarioExistente2 || destinatario == destinatarioExistente3){
        alert('Transferencia Realizada');
    } else{
        alert('Tranferencia inválida')
    }
} else{
    alert('Tranferencia inválida')
}