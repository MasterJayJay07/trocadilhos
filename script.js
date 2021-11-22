function gerarNumero(min, max) {
   min = Math.ceil(1);
   max = Math.floor(trocadilhos.length);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

function card(){
    let posicao = gerarNumero()
    return trocadilhos[posicao]
}