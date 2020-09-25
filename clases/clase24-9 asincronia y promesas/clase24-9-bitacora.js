// Todas las promesas: tener una acción para cuando finalicen todas las promesas  
// Tenemos un ciclo de N cantidad de repeticiones y por cada vuelta lanzamos una promesa. Puede ser para buscar información, acceder a una imagen o ejecutar una consulta a una base de datos. Solamente nos sirve que todas las promesas se cumplan de manera satisfactoria, para esto contamos con promise.all.
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 200);
});
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 100);
});
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 300);
});
Promise.all([promesa1, promesa2, promesa3]).then((resp) => {
    console.log(resp); // Logs [1,2,3]
}, (err) => {
    console.log(err); // Not executed
});

//Promesas en cadena: que la resolución de una promesa se ejecute al finalizar la anterior. 
//Mediante las promesas en cadena poder encadenar un resultado tras otro, es decir, ejecutar una promesa y pasar a otra promesa. De esta manera podemos ejecutar una serie de instrucciones y, cuando concluyan, ejecutar otra serie:

new Promise((resolver, rechazar) => {
    console.log('Inicial');
    
    resolver();
})
.then(() => {
    throw new Error('Algo falló');
    
    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz aquello');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});

// Carrera de promesas: Capturar la primera promesa que se resuelva sin importar el resto de las promesas. Race ejecuta un array de promesas tal como lo hace .all pero el then se ejecutará en el momento en el que la primera promesa se resuelva, sin esperar el resultado del resto de las promesas:

var p1 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 500, "uno");
});
var p2 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 100, "dos");
});

Promise.race([p1, p2]).then( value => {
    console.log(value); // "dos"
    // Ambas se resuelven, pero la p2 antes.
});