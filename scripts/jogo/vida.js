class Vida {
  constructor(maximo, inicial) {
    this.maximo = maximo;
    this.inicial = inicial;
    this.vidas = this.inicial;
    this.xInicial = 20;
    this.largura = 30;
  }
  
  exibe() {
    textFont(fontePlacar);
    textAlign(LEFT);
    fill('#fff');
    textSize(15);
    text('Vidas\nExtras:', 5, 20);
    for (let v = 1; v <= this.vidas; v++) {
      const margem = v * (this.largura);
      const posicao = this.xInicial * (v + 1);
      image(imgVida, posicao + margem, 20, this.largura, this.largura);
    }
  }
  
  perdeVida() {
    this.vidas--;
  }
  
  ganhaVida() {
    if (this.vidas <= this.maximo) {
      this.vidas++;
    }
  }
}