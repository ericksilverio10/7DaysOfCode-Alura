
const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert(`Seu nome é ${nome}, sua idade é ${idade} anos e você está estudando ${linguagem}`);
pergunta = prompt(`Você gosta de estudar ${linguagem}? Digite 1 para SIM e 2 para NÃO:`)

if(pergunta == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else{
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}