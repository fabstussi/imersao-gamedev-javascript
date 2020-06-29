class Placar {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textFont(fontePlacar);
    textAlign(RIGHT);
    fill('#fff');
    textSize(40);
    text(this.pontos, width - 30, 50);
  }
  
  adicionarPonto(valorInimigo) {
    if (!personagem.invensivel) {
      this.pontos = this.pontos + valorInimigo;
      poder.acumulaPoder();
    }
  }
}