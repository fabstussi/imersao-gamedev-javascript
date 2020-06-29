class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, spriteLarg, spriteAlt, velocidade, delay, pontos) {
    super(matriz, imagem, x, variacaoY, largura, altura, spriteLarg, spriteAlt);
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
    this.pontos = pontos;
  }
  
  move(atual) {
    this.atual = atual;
    this.x = this.x - this.velocidade;
    if (this.x < -this.largura) {
      this.x = width + this.delay;
      placar.adicionarPonto(this.pontos);
      personagem.ficarInvensivel(false);
      this.atual = parseInt(random(0, 3));
      if (this.atual == 3) {
        this.atual = parseInt(random(0, 2));
      }
      this.velocidade = parseInt(random(10, 25));
    }
    return this.atual;
  }
}