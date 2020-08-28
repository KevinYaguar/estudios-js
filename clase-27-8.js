const ARREGLO = ['Hola', 4, true, 5, "Esto es un mje", "Esto es un mje", {}, () => {}];
let suma = 0;
let arregloNoNumerico = [];
for (var i = 0; i < ARREGLO.length; i++) {
    let valor = parseInt(ARREGLO[i]);   //Valor en la posición I
    if (!isNaN(valor)){                  //Si es un numero el valor que se encuentra en la posición i
       suma += valor;                  //suma = suma + valor que se encuentra en la posición i.
    } else {
        arregloNoNumerico.push(ARREGLO[i]);
    }
   
}
alert('La suma total de los numeros es ' + suma)
console.log(arregloNoNumerico)