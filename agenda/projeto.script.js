let agenda_contatos = [];
let decisao; 

do{
    const menu = `
    Grave..........1
    Liste..........2
    Busque..........3
    Exclua.........4
    `

    let opcaoMenu = prompt(menu);

    if(opcaoMenu == "1"){
        const nome = prompt("Digite seu nome");
        const telefone = prompt("Digite seu número de telefone ");

        const individuo = {
            nome,
            telefone
        }

        agenda_contatos.push(individuo);
        alert("contato salvo!");

    }else if(opcaoMenu == "2"){
        let lista = "";

        for(let i = 0; i < agenda_contatos.length; i++){
            lista += `
            ---------------------------
            Contato ${i+1}:
            Nome: ${agenda_contatos[i].nome}
            Telefone: ${agenda_contatos[i].telefone}
            `;

        }

        alert(lista);

    }else if(opcaoMenu == "3"){
        const nome = prompt("Digite o nome que vc qeseja encontrar: ");
        encontrei = -1;

        for(let i = 0; i < agenda_contatos.length; i++){
            if(nome == agenda_contatos[i].nome){
                encontrei = i;
            }
        }

        if( encontrei == -1){
            alert("Não encontramos nenhuma pessoa com esse nome! =(");
        }else{
            alert(`
            Nome: ${agenda_contatos[ encontrei].nome}
            Telefone: ${agenda_contatos[encontrei].telefone}
            `);
        }

    }else if(opcaoMenu == "4"){
        const nome = prompt("Digite o nome do contato que vc deseja deletar da agenda: ");
        let  encontrei = -1;

        for(let i = 0; i < agenda_contatos.length; i++){
            if(nome === agenda_contatos[i].nome){
                encontrei= i;
            }
        }

        if( encontrei === -1){
            alert(" Não há nenhum individuo com esse nome ");
        }else{
            agenda_contatos.splice(encontrei, 1);
            alert("contato removido!");
        }
    }else{
        alert("inválid0!")
    }

    decicao = prompt("continuar? yes/no");
}while(decicao === "yes" || decicao === "yes");