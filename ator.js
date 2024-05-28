//variáveis do ator
let xAtor = 100;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;
let colisao = false;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yAtor +=3;
    }
}

function verificaColisao() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter);
    for (let i =0; i < imagemCarros.lenght; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], 
    comprimentoCarros, alturaCarros, xAtor, yAtor, 15);
    if(colisao) {
        print("Colidiu");
    }
    }
}