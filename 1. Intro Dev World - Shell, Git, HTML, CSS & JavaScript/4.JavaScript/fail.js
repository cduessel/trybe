let n = 8;

for ( let y = 0 ; y < n ; y += 1) {
    
    for ( let x = 0 ; x < n ; x += 1){
        process.stdout.write ('o');
    }
    process.stdout.write('\n');
}

let n = 5, aux="";

for (let i=0;i<n;i+=1){
  aux= aux +"*";
  console.log(aux);
}