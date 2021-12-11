function selecionandoNumero(){
    var numeroSelecao = Math.random();
    if(numeroSelecao < 0.2)
        return 1
    else if(numeroSelecao < 0.4)
        return 2
    else if(numeroSelecao < 0.6)
        return 3
    else if(numeroSelecao < 0.8)
        return 4
    else
        return 5
}

var img = window.document.getElementById("imagem")
img.style.height = '400px';
img.style.width = '500px';

function procurar(img){
    var selecionando = selecionandoNumero()   
    switch(selecionando){
        case 1:
            img.src = 'gatinho_1.png'
            break
        case 2:
            img.src = 'gatinho_2.jpg'
            break
        case 3:
            img.src = 'gatinho_3.jpg'
            break
        case 4:
            img.src = 'gatinho_4.jpg'
            break
        case 5:
            img.src = 'gatinho_5.jpeg'
            break
    }
}