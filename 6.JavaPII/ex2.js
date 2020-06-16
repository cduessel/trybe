// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")

// function longestWord(frase) {
//   let words = split(" ", frase)
// }

const frase = ("Antônio foi no banheiro e não sabemos o que aconteceu");

function longestWord (frase){
    let words = frase.split(" ");
    let longest = for(let i=1, i <= words.length, i += 1){
        if (words[i].length > words[i-1].length){words[i]}
    }
return(longest)
}


