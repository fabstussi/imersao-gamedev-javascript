// Variáveis dos caminhos das imagens a serem carregadas.
let imgCena;
let imgPersonagem;
let imgInimigo;
let imgTroll;
let imgVoador;
let imgGameOver;
let imgTelaInicial;
let imgVida;
// Variáveis dos caminhos dos sons a serem carregados.
let trilha; 
let somPulo;
let intro;
let colisao;
let kill;
//Variáveis dos caminhos das fontes a serem carregadas.
let fonteTelaInicial;
let fontePlacar;
// Variáveis que instanciam as cenas do jogo.
let jogo;
let cenas;
let telaInicial;
// Variáveis que instanciam personagens e npcs do jogo.
let cenario;
let personagem;
let inimigo;
let troll;
let voador;
// Variáveis que instanciam objetos da tela.
let placar;
let poder;
let vida;
let botaoInicio;
// Variáveis de controle do jogo.
let inimigoAtual = 0;
let cenaAtual = 'telaInicial';
// Matrizes com as coordenadas dos Sprites para as animações.
const matrizInimigo = [
  [0, 0], [104, 0], [208, 0], [312, 0],
  [0, 104], [104, 104], [208, 104], [312, 104],
  [0, 208], [104, 208], [208, 208], [312, 208],
  [0, 312], [104, 312], [208, 312], [312, 312],
  [0, 418], [104, 418], [208, 418], [312, 418],
  [0, 522], [104, 522], [208, 522], [312, 522],
  [0, 626], [104, 626], [208, 626], [312, 626],
];
const matrizTroll = [
  [0, 0], [400, 0], [800, 0], [1200, 0], [1600, 0],
  [0, 400], [400, 400], [800, 400], [1200, 400], [1600, 400],
  [0, 800], [400, 800], [800, 800], [1200, 800], [1600, 800],
  [0, 1200], [400, 1200], [800, 1200], [1200, 1200], [1600, 1200], 
  [0, 1600], [400, 1600], [800, 1600], [1200, 1600], [1600, 1600],
  [0, 2000], [400, 2000], [800, 2000],
];
const matrizVoador = [
  [0, 0], [200, 0], [400, 0],
  [0, 150], [200, 150], [400, 150],
  [0, 300], [200, 300], [400, 300],
  [0, 450], [200, 450], [400, 450],
  [0, 600], [200, 600], [400, 600],
  [0, 750],
];
const matrizPersonagem = [
                         [0, 0], [220, 0], [440, 0], [660, 0], 
                         [0, 270], [220, 270], [440, 270], [660, 270], 
                         [0, 540], [220, 540], [440, 540], [660, 540], 
                         [0, 810], [220, 810], [440, 810], [660, 810]];
// Constantes de controle do jogo.
const inimigos = [];