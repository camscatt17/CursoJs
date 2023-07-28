function meuEscopo() {
    //1- Capturar evento de submit do formulário
    const form = document.querySelector('#form');
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        const inputPeso = evento.target.querySelector('#peso');
        const inputAltura = evento.target.querySelector('#altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        validacaoInput(peso, altura);

        const imc = calculoIMC(peso, altura);
        const NivelIMC = getNivelIMC(imc);

        const msg = `Seu IMC é ${imc} (${NivelIMC}).`;
        setResultado(msg, true);

    });

    function getNivelIMC(imc){
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        
        if(imc >= 39.9) return nivel[5];
        if(imc >= 34.9) return nivel[4];
        if(imc >= 29.9) return nivel[3];
        if(imc >= 24.9) return nivel[2];
        if(imc >= 18.5) return nivel[1];
        if(imc < 18.5)  return nivel[0];
    };

    function calculoIMC(peso, altura){
        const imc = peso/altura**2;
        return imc.toFixed(2);
    };

    function validacaoInput(peso, altura){
        if(!peso){
            setResultado('Peso inválido', false);
            return;
        }else if (!altura){
            setResultado('Altura inválida', false);
            return;
        }
        console.log('Cheguei aqui!');
    };

    function setResultado(msg, isValid){
        const resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        const p = criaParagrafo();
        p.innerHTML = msg;
        resultado.appendChild(p);      
    };

    function criaParagrafo(){
        const p = document.createElement('p');
        return p;
    };
};

meuEscopo();

