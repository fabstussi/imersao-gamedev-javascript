class Poder {
  constructor() {
    this.pontosDePoder = 0;
    this.tamanhoBloco = this.pontosDePoder * 10;
  }

  acumulaPoder() {
    if (this.pontosDePoder < 10) {
      this.pontosDePoder++;
      this.tamanhoBloco = this.pontosDePoder * 10;
    }
  }

  exibe() {
    if (this.pontosDePoder <= 5) {
      fill('green');
    } else if (this.pontosDePoder <= 9) {
      fill('yellow');
    } else {
      fill('red');
    }
    rect(10, height - 15, this.tamanhoBloco, 15)
    textFont(fontePlacar);
    textAlign(LEFT);
    textSize(15);
    if (this.pontosDePoder < 10) {
      text(this.tamanhoBloco + '%', this.tamanhoBloco + 20, height - 3);
    } else {
      text(this.tamanhoBloco + '% - [P] para 3º pulo 1x', this.tamanhoBloco + 20, height - 3);
    }
  }

  usaPoder() {
    if (this.pontosDePoder == 10) {
      personagem.maximoDePulos = 3;
      this.pontosDePoder = 0;
    }
  }
}