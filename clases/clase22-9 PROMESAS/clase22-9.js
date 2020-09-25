/*let aleatorioPromise = new Promise((resolve, reject) => {
    num = Math.round(Math.random()*10);
    setTimeout(function(){
        if(num % 2 ==  0){
            resolve(` el numero es par`)
        }
        else{
            reject(` el numero es impar`)
        };
    }, 2000)
    
})
aleatorioPromise.then((mensaje)=> {
    console.log(`respuesta de promesa: ${mensaje} numero  es ${num}`)
}).catch((errormensaje)=>{
    console.log(`respuesta de promesa: ${errormensaje}  numero  es ${num}`)
})*/

// Ejercicio con fetch. Followers en Github.
/*function followers(username){
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
        fetch(data.followers_url)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(() => console.error('no se pueden recuperar los followers'))
    })
    .catch(() => console.error('no se pueden recuperar los followers'));
}
//followers('KevinYaguar');*/

// Ejercicio Buscar Usuario en Gihub



let buscar = document.getElementById('buscar');
let button = document.getElementById('btn');

mostrarDatosdeUsuario = () => {
    let username = buscar.value;
    fetch(`https://api.github.com/users/${username}`)
        .then(res => console.log(res.json()))
           .catch(() => console.error('El usuario no existe'))
}
mostrarRepos = () => {
    let username = buscar.value;
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => console.log(res.json()))
           .catch(() => console.error('El usuario no existe'))
}

button.addEventListener('click', mostrarDatosdeUsuario);
button.addEventListener('click', mostrarRepos);
