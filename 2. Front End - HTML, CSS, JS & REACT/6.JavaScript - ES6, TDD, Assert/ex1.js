function fatorial(n) {
    for(let i = n-1; i > 0; i -= 1){
      n = n*i;
    }
    return(n)
}

console.log(fatorial(4))

// let n = 4;
// let res = 1;
// console.log(() => {for(let i = 1; i <= n; i += 1){`res*i`}})


