let newItem = document.createElement('li');
newItem.textContent = "Item 0";
newItem.style.borderRight = '1px solid black';

let one = document.getElementById('one');

one.before(newItem);

let p = document.getElementById('txt');

let stylesTxt = p.firstChild.style;

stylesTxt.fontWeight = 'bolder';



let intervalo;
let intervalo2;

function cambioImg(){
    intervalo = setInterval(cambioUno, 2000);
    intervalo2 = setInterval(cambioDos, 4000);
}
function cambioUno(){
    var primeraImg = document.getElementById('primer-imagen');
    primeraImg.src = primeraImg.src == 'imagen2.jfif' ? 'imagen1.jfif' : 'imagen2.jfif';
    console.log(primeraImg.src);
}

function cambioDos(){
    var segundaImg = document.getElementById('primer-imagen');
    segundaImg.src = segundaImg.src == 'imagen2.jfif' ? 'imagen1.jfif' : 'imagen1.jfif';
    console.log(segundaImg.src);

}

cambioImg();


function order(){
    let imgOne = document.getElementById('img-one');
    imgOne.style.order = imgOne.style.order == '2' ? '1' : '2';
    let imgTwo = document.getElementById('img-two');
    imgTwo.style.order = imgTwo.style.order == '1' ? '2' : '1';
}
order();


//Agregar Patrocinadores
let campoTexto = document.createElement('input');

campoTexto.setAttribute('type', 'text');
campoTexto.setAttribute('placeholder', 'escriba aqui su nombre');

let styleCampo = campoTexto.style;
styleCampo.border = '1px solid black';

let boton = document.createElement('button');
boton.setAttribute('value', 'agregar');
boton.innerHTML = 'agregar';
let styleBoton = boton.style;
styleBoton.padding = '2px';
styleBoton.margin = '3px';
styleBoton.border = '1px solid black';
boton.addEventListener('click', agregarPatrocinador);
campoTexto.addEventListener('keyup', (event) =>{
    if(event.keyCode === 13){
        agregarPatrocinador();
        campoTexto.value = '';
    }
});
function agregarPatrocinador() {
    let patrocinador = document.createElement('li');
    patrocinador.innerHTML = campoTexto.value;
    listaPatreon.appendChild(patrocinador);
    campoTexto.value = '';
}

let listaPatreon = document.createElement('ul');

let foot = document.getElementById('foot');
console.log(foot);
foot.appendChild(campoTexto);
foot.appendChild(boton);
foot.appendChild(listaPatreon);

//Resalta el logo

let bordeLogo = document.getElementById('logo-box');

bordeLogo.addEventListener('mouseover', (event) =>{
    bordeLogo.className = 'logo-border-red';
});
bordeLogo.addEventListener('mouseout', (event) =>{
    bordeLogo.className = '';
});

// Reemplazar título

let titulo = document.getElementById('heading');
titulo.addEventListener('click', (event) =>{
    let nuevoTitulo = prompt('Ingrese nuevo título');
    localStorage.setItem('nuevoTitulo', nuevoTitulo);
    titulo.innerHTML = nuevoTitulo;
});

// Ver mas

let two = document.getElementById('two');
let main = document.getElementsByTagName('main');

let verMasButton = document.getElementById('button');
verMasButton.addEventListener('click', (event) => {
    let repetirseccion = document.createElement('section');
    repetirseccion = two;
    verMasButton.after(repetirseccion);

});