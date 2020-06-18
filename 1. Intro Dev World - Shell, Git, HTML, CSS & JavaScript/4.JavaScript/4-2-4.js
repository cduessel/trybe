// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


    if(
    (numbers.reduce((a, b) => a + b, 0)/ numbers.length) > 20){
        console.log("maior que 20")
    }
    else{ console.log("o valor é menor ou igual a 20")}
  
