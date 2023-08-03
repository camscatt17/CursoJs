function main(){
    const paragrafos = document.querySelector('.paragrafos');
    const divP = paragrafos.querySelectorAll('p');

    const estilosBody = getComputedStyle(document.body);
    const backgroundColorBody = estilosBody.backgroundColor;

    for(let p of divP){
        p.style.backgroundColor = backgroundColorBody;
        p.style.color = '#FFFFFF';

    }
};

main();