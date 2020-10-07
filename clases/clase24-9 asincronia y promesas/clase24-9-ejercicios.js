//Fetch
/*
const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts/42");
console.log(fetchPromise);
fetchPromise.then(response => {
  console.log(response);
  return response.json();
}).then(json => {
    console.log(json)
    return json.id;
})
.then(x => console.log(x));

//Promesas en cadena, el valor de 'result' se va modificando a medida se avanza en la cadena
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
}).then((result)=>{
    console.log('Cadena de promesas');
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 2;
}).then((result)=>{
    console.log(result);
    return result * 2;
})

promise.then(x => console.log(x));

//Comparar lo siguiente con la cadena de promesas
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
}).then((result)=>{
    console.log('Promesas no encadenadas');
    console.log(result);
    return result * 2;
})

promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})
promise2.then((result)=>{
    console.log(result);
    return result * 2;
})

//Promise Race
let promiseRace1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 1'), 1200);
});
let promiseRace2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 2'), 800);
});
let promiseRace3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 3'), 650);
});
let promiseRace4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa 4'), 1000);
});

Promise.race([promiseRace1, promiseRace2, promiseRace3, promiseRace4]).then((response) => {
    console.log("La promesa ganadora de la carrera  es la " + response);
}).catch((error)=>{
    console.log('Error: ' + error);
})

//Promise.all()
let promiseAll1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 800);
});
let promiseAll2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 650);
});
let promiseAll3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
});
Promise.all([promiseAll1, promiseAll2, promiseAll3]).then((response) => {
    console.log("El primero: "+ response[0]);
    console.log('Promise.all');
    console.log(response);
    let suma = 0;
    for(let i = 0; i < response.length; i++){
        console.log(response[i]);
        suma += response[i];
    }
    console.log(suma);
}).catch((error)=>{
    console.log('Error en Promise.all 1: ' + error);
})


//Promise.all() con promesas rechazados
let promise2All1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 800);
});
let promise2All2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 800);
});
let promise2All3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000);
});
Promise.all([promise2All1, promise2All2, promise2All3]).then((response) => {
    console.log('Promise.all 2');
    console.log(response);
    let suma = 0;
    for(let i = 0; i < response.length; i++){
        console.log(response[i]);
        suma += response[i];
    }
    console.log(suma);
}).catch((error)=>{
    console.error('Error en Promise.all 2: ' + error);
})
*/
// EJERCICIO POKEMON :Ejecuta 3 llamadas diferentes al siguiente endpoint: https://pokeapi.co/api/v2/pokemon/ + (número entero) Cuando todas las llamadas estén completas, muestra los resultados por pantalla modificando el DOM.

let promises = [];
for (let i = 0; i < 3; i++) {
    promises[i] = fetch("https://pokeapi.co/api/v2/pokemon/" + (Math.round(Math.random() * 100)));
}

promises.forEach(promise => {
    promise.then(res => res.json())
        .then(data => {
            let imagen = data.sprites.front_default;
            let body = document.getElementsByTagName("body")[0];
            let img = document.createElement("img");
            img.setAttribute("src", imagen);
            body.appendChild(img);
        })
});

//Genera un array con 10 posiciones numéricas.Toma de manera aleatoria 3 elementos.Lanza 3 fetch al mismo Endpoint de Pokemon y muestra solamente la primera respuesta.


let promesas = [];

for (let i = 0; i < 10; i++) {
    promesas[i] = fetch("https://pokeapi.co/api/v2/pokemon/" + (Math.round(Math.random() * 100)));
}
console.log(promesas);

Promise.race(promesas.splice(0, 3))
    .then(res => res.json())
    .then(data => {
        let imagen = data.sprites.front_default;
        let body = document.getElementsByTagName('body')[0];
        let img = document.createElement('img');
        img.setAttribute('src', imagen);
        body.appendChild(img);
    });

//Cambia uno de los elementos de tu array a un valor tipo string. Repite el proceso: toma de manera aleatoria 3 elementos. Lanza 3 fetch al mismo Endpoint de Pokemon y muestralos siguientes resultados:
//- Si los 3 request finalizaron correctamente, muestralos resultados por pantalla.
//- Si algún request falló (te tocó el valor string en la elección aleatoria), muestra un error por pantalla.
console.log('EJERCICIO TRES:')
let promesas2 = [];

for (let i = 0; i < 10; i++) {
    promesas2[i] = fetch("https://pokeapi.co/api/v2/pokemon/" + (Math.round(Math.random() * 100)));
}
let aleatorio = Math.floor(Math.random() * (promesas2.length));
promesas2[aleatorio] = 'string metiche';

console.log(promesas2);

Promise.all(promesas2.splice(0, 3))
    .then(res2 =>{
        for(k = 0 ; k < res2.length; k++){
             console.log(res2[k].json());   
        } 
        
    })
    /*
    .then(data2 => {
        let imagen2 = data2.sprites.front_default;
        let body2 = document.getElementsByTagName('body')[0];
        let img2 = document.createElement('img');
        img2.setAttribute('src', imagen2);
        img2.setAttribute('alt', 'imagen2');
        body2.appendChild(img2);
    })*/

    .catch(error => console.log('Ah salido el string ' + error))





/*
//Cambio uno de los elementos del array por un string.
let aleatorio = Math.floor(Math.random() * (promesas2.length));
promesas2[aleatorio] = 'string metiche';

//Verificar el numero aleatorio y como queda el array
console.log('Numero aleatorio uno: ' + aleatorio);
console.log(promesas2);

let aleatorio2 = Math.floor(Math.random() * (promesas2.length - 2));
console.log('Numero aleatorio dos: ' + aleatorio2);
console.log(promesas2.splice(aleatorio2, 3));
*/