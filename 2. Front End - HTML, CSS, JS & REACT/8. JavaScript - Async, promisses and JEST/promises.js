const puxapromessa = () => {

const promessa = new Promise((resolve, reject) => { // resolve, reject
  const arraia = [3, 7, 9, 10, 11, 13];
  const res = arraia.reduce((acc, num) => acc + (num*num));
  res < 808 ? resolve(res) : reject()
}
)

function suucesso(){console.log("deu bão")};
function tentamais(){console.log("deu ruim")}
function aleat(res){
  const go = [1,2,3].map(nums => nums*res);
console.log(go)}

promessa
  .then(aleat)
  .then(suucesso)
  .catch(tentamais)
}

puxapromessa()