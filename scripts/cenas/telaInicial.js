class TelaInicial {
  constructor() {
    this.tocando = false;
    this.botaoInicio = new Botao('Iniciar', width / 2, height / 7 * 5, 
                                 'botao-tela-inicial', (botao) => {
                                  botao.remove(); cenaAtual = 'jogo';                                         intro.stop();}, true);
    }
  
  setup() {}
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    if (!this.tocando) {
      this._somIntro();
    }
  }
  
  _imagemDeFundo() {
    image(imgTelaInicial, 0, 0, width, height);
  }
  
  _somIntro() {
    intro.loop()
    this.tocando = true;
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    // fill('#fff');
    textSize(height / 8);
    text('As Aventuras da', width / 2, height / 4);
    textSize(height / 4);
    text('Bruxinha Sarah', width / 2, height / 2);
    // textSize(height / 36);
    // text('PRESSIONE ENTER PARA INICIAR', width / 2, height / 1.2);
  }
  
  // keyPressed() {
  //   if (keyCode == 13) {
  //     if (cenaAtual == 'telaInicial') {
  //       clear();
  //       intro.stop();
  //       this.tocando = false;
  //       cenaAtual = 'jogo';
  //     } else {
  //       cenaAtual = 'telaInicial'
  //     }
  //   }
  // }
}