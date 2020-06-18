const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

function incluiKey(objeto, keyz, valor){
    let chavinha = keyz;
    objeto[chavinha] = valor;
    console.log(objeto)
}

incluiKey(customer1, "bloodtype", "o+");

function nwObj(objeto){
    let dados = Object.keys(objeto);
    for(i in dados){
        console.log(`${dados[i], valor correspondente: ${objeto[dados[i]]}`); 
    }
};

nwObj(customer1);