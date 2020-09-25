//Crea 3 promesas diferentes que tomen al azar un número del 1 al 100. Cuando las 3 promesas tienen el número al azar mayor a 50 muestra un mensaje de éxito, de lo contrario muestra un mensaje que indique que al menos 1 promesa no superó el número 50.

let p1 = new Promise((resolve, reject) =>{
    i = Math.floor(Math.random()*100)
        if(i > 50){
            resolve ('ok');
        } else{
            reject ('Numero menor a 50!');
        }
        console.log(i);
});
let p2 = new Promise((resolve, reject) =>{
    i = Math.floor(Math.random()*100)
        if(i > 50){
            resolve ('ok');
        } else{
            reject ('Numero menor a 50!');
        }
        console.log(i);
});
let p3 = new Promise((resolve, reject) =>{
    i = Math.floor(Math.random()*100)
        if(i > 50){
            resolve ('ok');        
        } else{
            reject ('Numero menor a 50!');
        }
        console.log(i);
});

Promise.all([p1, p2, p3]).then((res) =>{
    console.log('Todos los numeros son mayores a 50!');
}, (err) => {
    console.error(err);
})