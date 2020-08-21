/*var kilometros = prompt('Cuántos kilometros desea recorrer?');
var distaciaTotalConUnTanque = 45*15;
var cantidadDeReabastecimientos = Math.ceil(kilometros/distaciaTotalConUnTanque) -1 ;

if(kilometros <= distaciaTotalConUnTanque){
    alert('Puedes recorres la distancia sin reabastecerte');
} else {
    alert('Tendrás que reabasterte el camino');
}

alert('Necesitarás reabastecer combustible ' + cantidadDeReabastecimientos + ' veces'); */

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








