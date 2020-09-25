class InfoUsuario {
    constructor(nombre, apellido, email, usuario, contraseña, activo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.activo = activo;
    }
}

let usuarios = [];
let cantidadUsuarios = 5; //sin uso aparente.
let usuariosActivos = ['kyaguar', 'lrequis', 'mrequis', 'gsegovia'];
let control = true;

let guardarUsuario = () => {
    try {
        usuario = new InfoUsuario(prompt('Ingrese su nombre: '),
            prompt('Ingrese su apellido: '),
            prompt('Ingrese su email: '),
            prompt('Ingrese su usuario: '),
            prompt('Ingrese su contraseña: '));

        let existe = usuarios.find(x => x.usuario === usuario.usuario) //si esto no existe es undefined, lo cual tiende a falso;
        let activado = usuariosActivos.find(x => x === usuario.usuario);

        if (!existe && activado) {
            usuarios.push(usuario);
            alert(`Bienvenido ${usuario.nombre}`);
        } else {
            throw new Error("El usuario ya existe o no esta activo. Ingrese otro usuario");
        }
    } catch (error) {
        alert(error);
    }
}

do {
    guardarUsuario();
    control = window.confirm('Desea ingresar otro usuario?')
} while (control)

console.log(usuarios);
console.log(usuariosActivos);
control2 = true;
var ubicacion;
//usar array usuariosActivos
let modificarUsuario = () => {
    try {
        paraModificar = prompt('¿Qué usuario quiere modificar?');
        chequeoExistentes = usuariosActivos.find(check => check === paraModificar); //si el usuario que ingresó no está en usuariosActivos será undefind, por tanto false. Si está en usuariosActivos será true;
        if (chequeoExistentes) {
            switch (paraModificar) {
                case 'kyaguar':
                    alert('El usuario a modificar es kyaguar');
                    ubicacion = usuariosActivos.indexOf(paraModificar);
                    usuariosActivos.splice(ubicacion, 1, guardarUsuario());
                    usuariosActivos.splice(ubicacion, 1, );
                    break;
                case 'lrequis':
                    alert('El usuario a modificar es lrequis');
                    ubicacion = usuariosActivos.indexOf(paraModificar);
                    usuariosActivos.splice(ubicacion, 1, guardarUsuario());
                    usuariosActivos.splice(ubicacion, 1, );
                    break;
                case 'mrequis':
                    alert('El usuario a modificar es mrequis');
                    ubicacion = usuariosActivos.indexOf(paraModificar);
                    usuariosActivos.splice(ubicacion, 1, guardarUsuario());
                    usuariosActivos.splice(ubicacion, 1, );
                    break;
            }
        } else {
            throw new Error('El usuario ingresado para modificar no existe');
        }
    } catch (error) {
        alert(error);
    }
}
do {
    control2 = window.confirm('Desea modificar algun usuario ingresado?')
    modificarUsuario();
} while (control)

console.log('Usuarios ingresados' + usuarios);
console.log(usuarios);
console.log('Usuarios logueados: ' + usuariosActivos);
console.log(usuariosActivos);

/*
let radio = parseFloat(prompt("Ingresa el valor del radio de un circulo"));

function diametroDeCirculo(x) {
    return 2*x;
}

function calcularCircunferencia(x) {
    return diametroDeCirculo(x) * Math.PI;
}

alert(`El diametro para el radio ingresado es: ${diametroDeCirculo(radio)}`);
alert(`La circunferencia del círculo para el radio ingresado es: ${calcularCircunferencia(radio)}`);
*/