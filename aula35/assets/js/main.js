function main(){
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ];
    
    const container = document.querySelector('.container');
    const div = document.createElement('div');

    for (let i = 0; i < elementos.length; i++){
        let {tag, texto} = elementos[i];
        let elemento = createElemento(tag);
        elemento.innerHTML = texto;
        div.appendChild(elemento);
    }

    container.appendChild(div);
};

function createElemento(tag){
    let elemento = document.createElement(tag);
    return elemento;
}

main();