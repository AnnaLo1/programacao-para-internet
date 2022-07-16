function somar(num1, num2){
    const soma = num1 + num2;
    return soma;
}

function subtrair(num1, num2){
    const diferenca = num1 - num2;
    return diferenca;
}

function multiplicar(num1, num2){
    const produto = num1 * num2;
    return produto;
}

function dividir(num1, num2){
    const quociente = num1/num2;
    return quociente;
}

function guardarNum(){
    const num1 = Number(prompt("Digite um número: "));
    const num2 = Number(prompt("Digite mais um número: "));

    return {num1, num2};
}

const menu = `
Escolha de acordo com o que vc deseja:
Somar.......... 1
Subtrair....... 2
Multiplicar.... 3
Dividir........ 4`;

let decisao;
let escolhamenuu;

do{
    escolhamenuu = prompt(menu);

    if(escolhamenuu == "1"){
        const num = GuardarNum();
        const soma = somar(num.num1, num.num2);

        alert(`A soma dos números é ${soma}`);

    }else if(escolhamenuu == "2"){
        const num = guardarNum();
        const diferenca = subtrair
        
        (num.num1, num.num2);

        alert(`A diferença dos números é ${diferenca}`);
    }else if(escolhamenuu == "3"){
        const num = guardarNum();
        const produto = multiplicar(num.num1, num.num2);

        alert(`O produto dos números é ${produto}`);

    }else if(escolhamenuu == "4"){
        const num = guardarNum();
        const quociente = dividir(num.num1, num.num2);

        alert(`O quociente da divisão é ${quociente}`);
    }else{
        alert("escolha inválida");
    }

    decisao = prompt("Deseja continuar? S/N");
}while(decisao.toUpperCase() === "S");