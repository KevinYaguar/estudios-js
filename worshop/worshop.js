let url = 'https://thesimpsonsquoteapi.glitch.me/quotes';

async function getQuotes (){
  let response = await fetch(url);
  let json = await response.json();
  let final = await json[0];

  let lugar = document.getElementById('fraseSimpsons');
    let frase = final.quote;
    lugar.innerHTML = frase;
    
  
  let lugarImagen = document.getElementById('imagenSimpsons');
  let imagen = document.createElement('img');
  imagen.src = final.image;
  lugarImagen.appendChild(imagen);
  
let caracter = document.getElementById('nombreFrase');
caracter.innerHTML = final.character;
}


getQuotes();