
function apresentaResposta(id, texto){
  let teste = document.getElementById(id);
  teste.innerHTML = texto;
}

function botaoResposta(){

apresentaResposta()
  

}

let caixaAltura, peso;
let imc = peso/(altura*altura);

caixaAltura = document.getElementById('input1');
altura = altura.value
console.log(altura);
