class Jogo {
  constructor() {
    this.tocando = false;
  }

  setup() {
    cenario = new Cenario(imgCena, 3);
    placar = new Placar();
    poder = new Poder();
    vida = new Vida(3, 2)
    personagem = new Personagem(matrizPersonagem, imgPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imgInimigo, width - 52, 30, 52, 52, 104, 104, 8, 0, 2);
    const troll = new Inimigo(matrizTroll, imgTroll, width, 0, 200, 200, 400, 400, 7, 0, 3);
    const voador = new Inimigo(matrizVoador, imgVoador, width - 52, 200, 100, 75, 200, 150, 6, 0, 1);

    inimigos.push(inimigo);
    inimigos.push(troll);
    inimigos.push(voador);
  }

  draw() {
    if (!this.tocando) {
      this._somTrilha();
    }
    cenario.exibe();
    cenario.move();

    placar.exibe();
    poder.exibe();
    vida.exibe()

    personagem.aplicaGravidade();
    personagem.exibe();
    
    const inimigo = inimigos[inimigoAtual];

    inimigo.exibe();
    inimigoAtual = inimigo.move(inimigoAtual);
    
    if (personagem.estaColidindo(inimigo) && !personagem.invensivel) {
      vida.perdeVida();
      personagem.ficarInvensivel(true);
      colisao.play()
      if (vida.vidas < 0) {
        image(imgGameOver, (width / 2) - (imgGameOver.width / 2), (height / 2) - (imgGameOver.height / 2));
        trilha.stop();
        // kill.play();
        noLoop();
      }
    }
  }

  keyPressed() {
    if (keyCode == 32) {
      personagem.pulo();
    }
    if (keyCode == 80) {
      poder.usaPoder();
    }
  }
  
  _somTrilha() {
    trilha.loop()
    this.tocando = true;
  }

}