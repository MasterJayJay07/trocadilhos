const card = document.getElementById("card")
const cardButton = document.getElementById("chooseButton")
const novaPergunta = document.createElement("h3")
const novaResposta = document.createElement("p")

function gerarNumero(min, max) {
   min = Math.ceil(1);
   max = Math.floor(trocadilhos.length);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseCard() {
    let posicao = gerarNumero();
    return trocadilhos[posicao];
}

cardButton.addEventListener("click", function(){
    let trocadilhoAtual = chooseCard()
    let question = trocadilhoAtual.pergunta
    let answer = trocadilhoAtual.resposta
    novaPergunta.innerHTML = question
    novaResposta.innerHTML = answer
    card.appendChild(novaPergunta)
    card.appendChild(novaResposta)
})