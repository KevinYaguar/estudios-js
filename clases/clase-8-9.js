class InformacionIngresada {
    constructor(nombre, background, color, size, tamano) {
        this.nombre = nombre;
        this.background = background;
        this.color = color;
        this.size = size;
        this.tamano = tamano;
    }
}

let solicitoInfo = () => {
    try {
        infoCuadrado = new InformacionIngresada(prompt('Ingrese su nombre y apellido'), prompt('Ingrese el color de fondo que prefiera #hexadecimal'), prompt('Ingrese el color de fuente que prefiera en #hexadecimal'), prompt('ingrese el tamaño de fuente que prefiera en pixeles'), prompt('De que tamaño en pixeles desea su cuadrado?'));

    } catch (error) {
        alert(error);
    }

}

let control = true;

do {
    solicitoInfo();
    control = window.confirm('¿Desea cambiar los datos ingresados?');
} while (control)
console.log(infoCuadrado);

let espacio = document.getElementById('espacio');

let crearCuadrado = document.createElement('div');
crearCuadrado.textContent = infoCuadrado.nombre;

let estilos = crearCuadrado.style;
estilos.border = "1px solid black";
estilos.background = infoCuadrado.background;
estilos.color = infoCuadrado.color;
estilos.fontSize = infoCuadrado.size;
estilos.width = infoCuadrado.tamano;
estilos.height = infoCuadrado.tamano;
estilos.margin = "auto";

espacio.insertBefore(crearCuadrado, null);

console.log(espacio);
console.log(crearCuadrado);
console.log(typeof (crearCuadrado));

/*
elt.style.color = "blue";  // Asignación directa

var st = elt.style;
st.color = "blue";  // Asignación Indirecta
*/