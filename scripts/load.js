function preload() {
  // Imagens
  imgCena = loadImage('img/floresta.png');
  imgPersonagem = loadImage('img/correndo.png');
  imgInimigo = loadImage('img/gotinha.png');
  imgTroll = loadImage('img/troll.png');
  imgVoador = loadImage('img/gotinha-voadora.png');
  imgGameOver = loadImage('img/game-over.png')
  imgTelaInicial = loadImage('img/telaInicial.png')
  imgVida = loadImage('img/coracao.png')
  // Sons
  trilha = loadSound('audio/trilha_jogo.mp3');
  somPulo = loadSound('audio/somPulo.mp3');
  intro = loadSound('audio/intro.wav');
  colisao = loadSound('audio/colisao.wav');
  // kill = loadSound('audio/kill.wav');
  kill = loadSound('audio/loud_no.wav');
  // Fontes
  fontePlacar = loadFont('font/consola.ttf');
  fonteTelaInicial = loadFont('font/fonteTelaInicial.otf');
}
