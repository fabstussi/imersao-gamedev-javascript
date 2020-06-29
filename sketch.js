//Função que inicia o jogo é o main 
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(32);
  
  telaInicial = new TelaInicial();
  
  jogo = new Jogo();
  jogo.setup();

  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed() {
  jogo.keyPressed();
  // telaInicial.keyPressed();
}

//Função responsável pela atualização da tela
function draw() {
  cenas[cenaAtual].draw()
}