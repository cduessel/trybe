// Agora inverta o lado do triângulo.

let n =5
let asterisco = "*"
let space = ""

let dois = ""

   for(let i =1; i<=n; i++){
        for (let j = 1; j<=n-i; j++){
            space = space + "a";
        }
        

        let dois = space + asterisco;

        console.log(asterisco+space+asterisco)
    }



console.log(dois)


