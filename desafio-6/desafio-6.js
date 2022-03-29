let nome = prompt("Olá! Qual o seu nome?")
let pergunta = prompt("Deseja adicionar  itens à sua lista? SIM [1] ou NÃO [2]");
let frutas = [];
let doces = [];
let laticinios = [];
let congelados = [];
let legumes = [];

while(pergunta == 1){
    let comida =  prompt("Qual comida você deseja inserir?").toUpperCase();
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
    pergunta = prompt("Deseja ADICIONAR mais algum item à sua lista? SIM [1] ou NÃO [2]");
    if (pergunta == 1){
        continue;
    }
    else if(pergunta == 2){
        let remover = prompt("Deseja REMOVER algum item da sua lista? SIM [1] ou NÃO [2]");
        while (remover == 1){
            let item_para_remover = prompt(`Qual item você deseja remover?\r\n ${doces}\r\n ${frutas}\r\n ${laticinios}\r\n ${legumes}\r\n ${congelados}`).toUpperCase();
            let confirmacao = prompt(`Gostaria de remover: ${item_para_remover}? SIM [1] ou NÃO [2]?`)
            if(confirmacao == 1){
                let indexLegumes = legumes.indexOf(item_para_remover);
                let indexDoces = doces.indexOf(item_para_remover);
                let indexLaticinios = laticinios.indexOf(item_para_remover);
                let indexCongelados = congelados.indexOf(item_para_remover);
                let indexFrutas = frutas.indexOf(item_para_remover);
                legumes.splice(indexLegumes-1, indexLegumes+1);
                doces.splice(indexDoces-1, indexDoces+1);
                laticinios.splice(indexLaticinios-1, indexLaticinios+1);
                congelados.splice(indexCongelados-1, indexCongelados+1);
                frutas.splice(indexFrutas-1, indexFrutas+1);
                break;
            }
            if(remover == 2  || confirmacao == 2){
                break;
            }
        } 
    } else{
        break;
    }
}
document.write(`Aqui está a sua lista, ${nome}:<br>`);
document.write(`Frutas: ${frutas}<br>`);
document.write(`Doces: ${doces}<br>`);
document.write(`Laticinios: ${laticinios}<br>`);
document.write(`Legumes: ${legumes}<br>`);
document.write(`Congelados: ${congelados}<br>`);

