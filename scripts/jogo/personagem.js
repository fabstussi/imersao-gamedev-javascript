class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, spriteLarg, spriteAlt) {
    super(matriz, imagem, x, variacaoY, largura, altura, spriteLarg, spriteAlt);
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 2;
    this.pulos = 0;
    this.maximoDePulos = 2;
    this.invensivel = false;
  }
  
  pulo() {
    if (this.pulos < this.maximoDePulos) {
      this.velocidadeDoPulo = -27;
      somPulo.play();
      this.pulos++;
      if (this.pulos == 3) {
        this.maximoDePulos = 2;
      }
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  estaColidindo(inimigo) {
    const precisao = 0.65
    const colisao = collideRectRect(
      this.x + 15,
      this.y + 15,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x + 15,
      inimigo.y + 15,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }
  
  ficarInvensivel(estado) {
    this.invensivel = estado;
  }
}
