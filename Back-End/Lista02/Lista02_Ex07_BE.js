/*7 – Bonus Roud – Crie uma tabela no console com todos os dados de venda de cada produto. */


const cantina = {
    quantidade: [],
    controle: 0,
    controleR: 0,
    controleB: 0
}

const obj = {
    cachorro_quente : {
        numero_vendido: 0,
        lucro: 0,
        despesa: 0
    }, 
    batata_frita : {
        numero_vendido: 0,
        lucro: 0,
        despesa: 0
    }, 
    refrigerante : {
        numero_vendido: 0,
        lucro: 0,
        despesa: 0
    }
}
let caixa = 0;
let contador =0;

function menu(opcao){
    do{
        alert("MENU \n1- UM Cachorro-quente ---- 8R$\n2- DOIS Cachorros-quentes ---- 15R$ \n3- UM Refrigerante ---- 5R$ \n4- DOIS Refrigerantes ---- 9R$ \n5- UMA Batata frita ---- 12R$ \n6- DUAS Batatas fritas ---- 20R$ \n7- Consultar vendas \n8- Saldo do dia \n9- Extrato \n10- Tabela de vendas \n11- Sair do MENU");
        opcao = parseInt(prompt("Informe a Opcao"));

        switch(opcao){
        case 1:
            alert("Compra de 1 cachorro quente realizada");
            cantina.quantidade.push("1 cachorro-quente, 8R$");
            cantina.controle = cantina.controle +1;
            caixa = caixa + 8;
            contador = contador + 4.50;
            obj.cachorro_quente.numero_vendido++;
            obj.cachorro_quente.lucro+=8;
            obj.cachorro_quente.despesa+=4.50;
            break;

        case 2:
            alert("Compra de 2 cachorros-quentes realizada");
            cantina.quantidade.push("2 cachorros-quente, 15R$");
            cantina.controle = cantina.controle+2;
            caixa = caixa + 15;
            contador = contador + 9;
            obj.cachorro_quente.numero_vendido+=2;
            obj.cachorro_quente.lucro+=15;
            obj.cachorro_quente.despesa+=9;
            break;
        
        case 3:
            alert("Compra de 1 refrigerante realizada");
            cantina.quantidade.push("1 refrigerante, 5R$");
            cantina.controleR = cantina.controleR+1;
            caixa = caixa + 5;
            contador = contador + 2;
            obj.refrigerante.numero_vendido++;
            obj.refrigerante.lucro+=5;
            obj.refrigerante.despesa+=2;
            break;
        
        case 4:
            alert("Compra de 2 refrigerantes realizada");
            cantina.quantidade.push("2 refrigerantes, 9R$");
            cantina.controleR = cantina.controleR+2;
            caixa = caixa + 9;
            contador = contador + 4;
            obj.refrigerante.numero_vendido+=2;
            obj.refrigerante.lucro+=9;
            obj.refrigerante.despesa+=4;
            break;

        case 5:
            alert("Compra de 1 batata frita realizada");
            cantina.quantidade.push("1 batata frita, 12R$");
            cantina.controleB = cantina.controleB+1;
            caixa = caixa + 12;
            contador = contador + 5;
            obj.batata_frita.numero_vendido++;
            obj.batata_frita.lucro+=12;
            obj.batata_frita.despesa+=5;
            break;

        case 6:
            alert("Compra de 2 batatas fritas realizada");
                cantina.quantidade.push("2 batatas fritas, 20R$");
                cantina.controleB = cantina.controleB+2;
                caixa = caixa + 20;
                contador = contador + 10;
                obj.batata_frita.numero_vendido+=2;
                obj.batata_frita.lucro+=20;
                obj.batata_frita.despesa+=10;
                break;

        case 7:
            for(i=0; i<cantina.quantidade.length; i++){
                console.log(cantina.quantidade[i]);
            }
            alert("Total em caixa: " + JSON.stringify(caixa)+ " R$");
            alert("Total de despesas: "+ JSON.stringify(contador)+" R$");
            break;

        case 8:
            saldo(caixa,contador);
            break;
        
        case 9:
            alert("QUANTIDADE DE PRODUTOS VENDIDA: \nCachorro-quente: "+cantina.controle+ "\nRefrigerante: "+cantina.controleR+"\nBatata frita:"+cantina.controleR);    
            break;
        
        case 10:
            console.table(obj);
        }

    }while(opcao != 11);
} 

function saldo(caixa,contador){
    let liquido = caixa - contador;
    alert("Saldo do dia: "+liquido+" R$");
}