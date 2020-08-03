const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

// function putjokeon(info){
//   const piada = document.createElement(H1);
//   piada.innerHTML = info.joke;
//   document.getElementById("jokeContainer").appendChild(piada)
// }

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById("jokeContainer").innerHTML = data.joke)
};

window.onload = () => fetchJoke();
        