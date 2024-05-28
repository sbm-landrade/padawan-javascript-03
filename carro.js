//código do carro


let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150]; 
let velocidadeCarros = [2, 2.5, 3.2];
let alturaCarros = [50, 50, 50];
let larguraCarros = [40, 40, 40];

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], alturaCarros[i], larguraCarros[i]);
    }
}

function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0;i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
        xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro) {
    return xCarro < -50;
}
