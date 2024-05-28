let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
//variáveis do carro
let xCarro = 420;

function preload() {
    imagemDaEstrada = loadImage("assets/estrada.png");
    imagemDoAtor = loadImage("assets/ator-1.png");
    imagemCarro = loadImage("assets/carro-1.png");
}

function setup() {
    createCanvas(500, 400);
}
function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
}

function mostraAtor() {
    image(imagemDoAtor, 100, 366, 30, 30);
}

function mostraCarro() {
    image(imagemCarro, xCarro, 40, 50, 40);
}