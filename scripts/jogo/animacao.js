class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, spriteLarg, spriteAlt) {
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura; // largura que a animação vai ter na tela
    this.altura = altura; // altura que a animação vai ter na tela
    this.x = x; //Posição X da animação na tela
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.spriteLarg = spriteLarg;
    this.spriteAlt = spriteAlt;
    
    this.frameAtual = 0;
  }
  
  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.spriteLarg, this.spriteAlt);
    this.anima();
  }
  
  exibeTelaInicial(x, y) {
    this.x = x;
    this.y = y;
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.spriteLarg, this.spriteAlt);
    this.anima();
  }
  
  anima() {
    this.frameAtual++
    if (this.frameAtual >= this.matriz.length) {
      this.frameAtual = 0;
    }
  }
}