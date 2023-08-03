// Escreva uma função que recebe 2 números e retorne o maior deles
function retornaMaiorNumero(numero1, numero2){
    if(numero1>numero2){
        return numero1;
    }
    return numero2;
};

function imprimeNumero(maiorNumero){
    const texto = document.querySelector('.container h1');
    texto.innerHTML=`O maior número é ${maiorNumero}`;
};


// Escreva uma função chamada ePaisagem que recebe dois argumentos: largura e altura de uma imagem (Number)
// Retorna true se a imagem estiver no modo paisagem e false se estiver no modo retrato.
const ePaisagem = (altura, largura)=>largura >= altura; //arrow function


// Escreva uma função que recebe um número e retorna:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Use a função com números de 0 a 100
function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if(numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if(numero % 3 === 0) return 'Fizz';
    if(numero % 5 === 0) return 'Buzz';
    return numero;
};

function main(){
    let numero1 = prompt('Digite o primeiro número:');
    numero1 = Number(numero1);
    let numero2 = prompt('Digite o segundo número:');
    numero2 = Number(numero2);
    const maiorNumero = retornaMaiorNumero(numero1, numero2);
    imprimeNumero(maiorNumero);
};

main();