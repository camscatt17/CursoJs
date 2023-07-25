// console.log('Meu nome é "Camila Santos". Estou aprendendo Javacript às', 10, 'da manhã.');

// const nome = 'Camila';
// const sobrenome = 'Santos';
// const idade = 26;
// const peso = 46;
// const altura = 1.60;

// let IMC;
// IMC = peso/(altura*altura);

// let anoNascimento;
// anoNascimento = 2023 - idade; 

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de', IMC);  
// console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// // Template strings
// console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} cm de altura e seu IMC é de ${IMC}`);  

const nome = prompt('Digite seu nome completo: ');
document.body.innerHTML += `O seu nome é: <strong>${nome} </strong> <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br/>`;
document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome? ${nome.indexOf('a')} <br/>`;
document.body.innerHTML += `Qual o último índice da letra A no seu nome? ${nome.lastIndexOf('a')} <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são:${nome.substring(nome.length - 3, nome.length)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são:${nome.split(" ")} <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br/>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br/>`;
 
