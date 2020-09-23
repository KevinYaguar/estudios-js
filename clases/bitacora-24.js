//Mini Challenge
/*
var saludar = (nombre, segundo, apellido) => "Hola " + nombre + " " + segundo + " " + apellido + ", cómo estás?";


console.log(saludar('Kevin', 'Leandro', 'Yaguar'));
*/

//recibe un parámetro y retorna si es mayor a cero, menor o igual a cero
/*
let mayor_menor = numero => {
    if(numero > 0){
            r = 'Mayor';
    }else{
    if(numero < 0){
            r = 'Menor';
    }else{
    r = 'Cero';
    }
    }
    return r;
}
console.log(mayor_menor(-3));
*/

// Challenge/Comunidad

let arrayNumerico1 = [1, 5, 9, 8, 9, 'k', 'arroz'];
let arrayNumerico2 = [7, 12, 5, 3, 44, 's', 'coca', 'pato'];
let num = 0;
let suma = 0;
let noNumericos = 0;
let resultado = 0;

let promedio_array = numero => {
        for (i = 0; i < arrayNumerico1.length; i++) {
                num = arrayNumerico1[i];

                noNumericos += isNaN(arrayNumerico1 [i]);

                if (!isNaN(num)) {
                        suma += num;
                }

                resultado = suma / (arrayNumerico1 .length - noNumericos);

        }
        return resultado;
}

console.log('El promedio del array numerico es: ' + promedio_array());


