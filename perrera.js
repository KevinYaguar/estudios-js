class Perro {

    constructor(nombre, raza, color, edad, tamaño, estado, ) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
        this.edad = edad;
        this.tamaño = tamaño;
        this.estado = estado;
    }
    getCaracteristicas() {
        return `Mi nombre es ${this.nombre}, mi raza es ${this.raza}, mi color ${this.color}, mi edad ${this.edad} y mi tamaño ${this.tamaño}. `
    }
    getEstado() {
        return `El estado del perro es ${this.estado}`
    }
}

let perro1 = new Perro('Pupi', 'caniche', 'negro', '5 años', '30 centímetros');
console.log(perro1);
perro1.estado = prompt('Ingrese si el perro está "en adopción", "adoptado" o "en proceso"');
alert(perro1.getEstado());
console.log(perro1.getCaracteristicas());
console.log(perro1.getEstado());

let perro2 = new Perro();
perro2.nombre = prompt('Ingrese el nombre del perro 2');
perro2.raza = prompt('Ingrese raza del perro 2');
perro2.color = prompt('Ingrese color del perro 2');
perro2.edad = prompt('Ingrese edad del perro 2');
perro2.tamaño = prompt('Ingrese tamaño del perro 2');
perro2.estado = prompt('Ingrese si el perro está "en adopción", "adoptado" o "en proceso"');
console.log(perro2);
console.log(perro2.getCaracteristicas());
console.log(perro2.getEstado());


let perro3 = new Perro();
let agregar = confirm('¿Quieres agregar otro perro?');
if (agregar === true) {
    perro3.nombre = prompt('Ingrese nombre del perro 3');
    perro3.raza = prompt('Ingrese raza del perro 3');
    perro3.color = prompt('Ingrese color del perro 3');
    perro3.edad = prompt('Ingrese edad del perro 3');
    perro3.tamaño = prompt('Ingrese tamaño del perro 3');
    perro3.estado = prompt('Ingrese si el perro está "en adopción", "adoptado" o "en proceso"');
    console.log(perro3);
    console.log(perro3.getCaracteristicas());
    console.log(perro3.getEstado());
}


let arrayPerros = [];
arrayPerros.push(perro1);
arrayPerros.push(perro2);
arrayPerros.push(perro3);
console.log(arrayPerros);



console.log('-------ESPACIO DE SEPARACION-----');
let perrosAdoptados = [];
let perrosEnProceso = [];
let perrosEnAdopcion = [];
let perrosTodos = [];
var algo;

for (i = 0; i <= arrayPerros.length; i++) {
    var algo = arrayPerros[i];
    if (algo == perro1) {
        perrosTodos.push(perro1.nombre);      
    } else if (algo == perro2){
        perrosTodos.push(perro2.nombre);      
    } else if (algo == perro3){
        perrosTodos.push(perro3.nombre);      
    }
}
console.log('Los perros en la perrera son: ' + perrosTodos);

if(perro1.estado == 'adoptado'){
    perrosAdoptados.push(perro1.nombre);
} else if(perro1.estado == 'en proceso'){
    perrosEnProceso.push(perro1.nombre);
}else if(perro1.estado == 'en adopción'){
    perrosEnAdopcion.push(perro1.nombre);
} 
if(perro2.estado == 'adoptado'){
    perrosAdoptados.push(perro2.nombre);
} else if(perro2.estado == 'en proceso'){
    perrosEnProceso.push(perro2.nombre);
}else if(perro2.estado == 'en adopción'){
    perrosEnAdopcion.push(perro2.nombre);
} 
if(perro3.estado == 'adoptado'){
    perrosAdoptados.push(perro3.nombre);
} else if(perro3.estado == 'en proceso'){
    perrosEnProceso.push(perro3.nombre);
}else if(perro3.estado == 'en adopción'){
    perrosEnAdopcion.push(perro3.nombre);
} 


console.log('Los perros adoptados son: ' + perrosAdoptados);
console.log('Los perros en adopción son: ' + perrosEnAdopcion);
console.log('Los perros en proceso de adopción son: ' + perrosEnProceso);

