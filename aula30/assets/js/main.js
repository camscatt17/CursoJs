//OPÇÃO 1
function main() {
    const h1 = document.querySelector(".container h1");
    const data = new Date();
    h1.innerHTML = criaDate(data);
};

function getDiaSemana(numerodiaSemana) {
    const diaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return diaSemana[numerodiaSemana];
};

function getMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes];
};

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaDate(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

main();


//OPÇÃO 2
// function main() {
//     const h1 = document.querySelector(".container h1");
//     const data = new Date();
//     const opcoes = {
//         dateStyle: 'full',
//         timeStyle: 'short'
//     };

//     h1.innerHTML = data.toLocaleString('pt-BR', opcoes);
// };

// main();

