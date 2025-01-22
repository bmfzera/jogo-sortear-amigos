//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.querySelector('#amigo');
    let nomeAmigo = inputAmigo.value.trim(); 
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return; 
    }
    amigos.push(nomeAmigo);

    atualizarListaAmigos();

    inputAmigo.value = "";
}

function atualizarListaAmigos() {
    let listaAmigos = document.querySelector('#listaAmigos');

    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {

        let listItem = document.createElement('li');
        listItem.textContent = amigo; 

        listaAmigos.appendChild(listItem);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de realizar o sorteio.");
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<li>O amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;

    amigos = []; 
    atualizarListaAmigos(); 
}
