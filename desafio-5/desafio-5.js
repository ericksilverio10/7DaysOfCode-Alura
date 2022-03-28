
let frutas = [];
let doces = [];
let laticinios = [];
let congelados = [];
let legumes = [];
let botao = document.querySelector('button');

function adicionar(){
    while(true){
        let comida =  prompt("Qual comida você deseja inserir?");
        let categoria = prompt("Qual a categoria? Frutas[1], Laticínios[2], Legumes[3], Congelados[4] ou Doces[5]");
        if(categoria == 1){
            frutas.push(comida);
        } else if(categoria == 2){
            laticinios.push(comida);
        } else if(categoria == 3){
            legumes.push(comida);
        } else if(categoria == 4){
            congelados.push(comida);
        }
        else if(categoria == 5){
            doces.push(comida);
        }
        let pergunta = prompt("Deseja adicionar mais algum item à sua lista? SIM [1] ou NÃO [2]");
        if(pergunta == 2){
            document.write(`Frutas: ${frutas}<br>`);
            document.write(`Doces: ${doces}<br>`);
            document.write(`Laticinios: ${laticinios}<br>`);
            document.write(`Legumes: ${legumes}<br>`);
            document.write(`Congelados: ${congelados}<br>`);
            break;
        }
    }
}


