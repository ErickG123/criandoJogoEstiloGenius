// Ordem do jogo
let order = [];
// Ordem dos clickes
let clickedOrder = [];
// Pontos
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

// Função que cria a ordem aleatória das cores do jogo
let shuffleOrder = () => {
    // Guarda um número aleatório a cada rodada
    let colorOrder = Math.floor(Math.random() * 4);
    // Populando o Array com a ordem
    order[order.length] = colorOrder;
    clickedOrder = [];

    // Mostrando a cor sorteada para o usuário
    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// Acende a cor da ordem
let lightColor = (element, number) => {
    number = number * 500;

    setTimeout(() => {
        // Adicionando uma classe toda vez que ele for "aceso"
        element.classList.add('selected');
    }, number - 250);
    // Removendo a classe para ele "apagar"
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Comparando a ordem clicada com a ordem do jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            lose();
            break;
        }

        if (clickedOrder.length == order.length) {
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
            nextLevel();
        }
    }
}

// Função para o click do usuário
let click = (color) => {
    // A posição que ele clicou representa a cor
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

// Função que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    }
    else if (color == 1) {
        return red;
    }
    else if (color == 2) {
        return yellow;
    }
    else if (color == 3) {
        return blue;
    }
}

// Função para o próxima nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Função caso o jogador tenha perdido
let lose = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função de início do jogo
let playGame = () => {
    alert('Bem vindo ao Geniu! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

// Ativando os clicks em cada cor
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3); 

playGame();