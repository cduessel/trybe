// Agora inverta o lado do triângulo.

let n =5;

   for(let nlinha =1; nlinha <=n; nlinha +=1){
       let linha ="";
        for (let qespacos =(n-nlinha); qespacos>0; qespacos-=1){
            linha += "a";
        }                        
        for (let star = 0; star <nlinha; star++){
            linha += "*";}
      
    console.log(linha);
    }
    