//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
//Valor esperado no retorno da função: true
//verificaFimPalavra("trybe", "be");
//Retorno esperado: true
//verificaFimPalavra("joaofernando", "fernan");
//Retorno esperado: false


function final(word, end){
    let ending = true

    for (let i = 0; i< (end.length); i+=1){
    if (end[end.length-(1-i)] !== word[word.length-(1-i)]){
    ending = false
    }
    return ending
}

}
console.log(final("trybe", "be"));
console.log(final("lucas", "lu"));
console.log(final("salomão", "mão"))

