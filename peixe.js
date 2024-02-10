var config = { //configurações básicas do jogo
    type: Phaser.AUTO, //o navegador escolhe automaticamente o tipo de renderizador da página web
    width: 800, //largura da tela do jogo
    height: 600, //altura da tela do jogo

    scene: { // define as funções que serão executadas durante o ciclo de vida do jogo
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config); // criando uma varíavel 'game' e guardando nela um 'novo jogo phaser', que utilizará as configurações definidas em config

var peixinho; // cria a variável peixinho e guarda o peixe

function preload() { //carregar os recursos do jogo
    this.load.image('mar', 'assets/bg_azul-claro.png'); // define 'mar' como apelido para a imagem
    this.load.image('logo', 'assets/logo-inteli_azul.png'); // carregar o logo
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png'); // carregar o peixe
    this.load.image('concha', 'assets/peixes/concha.png') // carregar a concha
}


function create() { //criar e configurar elementos do jogo
    this.add.image(400, 300, 'mar'); // adiciona a imagem 'mar' na tela do jogo; 400, 300 são as coordenadas da imagem na tela do jogo
    this.add.image(400,525, 'logo').setScale(0.5); // adicionar o logo na tela
    this.add.image(500, 700, 'concha').setScale(0.5); //adicionar a cocha na tela

    peixinho = this.add.image(400, 300, 'peixe'); //adicionar o peixe na tela

    // transformando a variável
    peixinho.setFlip(true, false);
}


function update() { //lógica de atualização em tempo real do jogo

    // adicionando controles no peixe
    peixinho.x = this.input.x; // posição em x do peixinho
    peixinho.y = this.input.y; // posição em y do peixinho
}

