// window.onload = alert ("scripto!")

// window.JustValidate('.js-form');

const estados = ['selecione aqui o seu','Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo',
'Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco',
'Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

window.onload = function () {
    for (let i = 0; i < estados.length; i += 1) {
        let obj = document.createElement('option');
        obj.innerHTML = estados[i];
        obj.setAttribute('value', estados[i]);
        document.getElementById('est').appendChild(obj);
    };
};

let dados = document.getElementsByTagName('input');

function resumodetd(){
    for (let j = 0; j < dados.length; j += 1){
        let res = document.createElement("li");
        res.innerHTML = dados[j].value;
        res.className= "list-group-item";
        document.getElementById('restop').appendChild(res);
    };
 };
    
document.getElementById('btn').addEventListener('click', resumodetd)