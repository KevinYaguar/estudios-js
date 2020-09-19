var arrayPrueba = ['perro', 'gato', 'mama', 'papa', 'cosa'];
console.log('El array es: ' + arrayPrueba);

var aModificar = prompt('ingresa a quien quieres modificar');
console.log('El que quiero modificar es: ' + aModificar);


var chequeoExistente = arrayPrueba.find(x => x === aModificar);
var ubicacion;
if (chequeoExistente) {
    switch (aModificar) {
        case 'perro':
            alert('El que vas a modificar es: ' + aModificar);
            ubicacion = arrayPrueba.indexOf(aModificar);
            console.log('Valor de ubicación: ' + ubicacion); break;
        case 'gato':
            alert('El que vas a modificar es: ' + aModificar);
            ubicacion = arrayPrueba.indexOf(aModificar);
            console.log('Valor de ubicación: ' + ubicacion); break;
        case 'mama':
            alert('El que vas a modificar es: ' + aModificar);
            ubicacion = arrayPrueba.indexOf(aModificar);
            console.log('Valor de ubicación: ' + ubicacion); break;
    }
}