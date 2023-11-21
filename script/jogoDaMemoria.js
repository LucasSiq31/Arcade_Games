//Array com as informações de cada carta
//            [Carta]   [Imagem]    [Valor]
var cartas = [["MARIO", "./imagens/jogoDaMemoria/cardMario.png", "1"],
            ["MARIO", "./imagens/jogoDaMemoria/cardMario.png", "1"],
            ["LUIGI", "./imagens/jogoDaMemoria/cardLuigi.png", "2"],
            ["LUIGI", "./imagens/jogoDaMemoria/cardLuigi.png", "2"],
            ["PEACH", "./imagens/jogoDaMemoria/cardPeach.png", "3"],
            ["PEACH", "./imagens/jogoDaMemoria/cardPeach.png", "3"],
            ["PAC-MAN", "./imagens/jogoDaMemoria/cardPacMan.png", "4"],
            ["PAC-MAN", "./imagens/jogoDaMemoria/cardPacMan.png", "4"],
            ["BLINKY", "./imagens/jogoDaMemoria/cardBlinky.png", "5"],
            ["BLINKY", "./imagens/jogoDaMemoria/cardBlinky.png", "5"],
            ["PINKY", "./imagens/jogoDaMemoria/cardPinky.png", "6"],
            ["PINKY", "./imagens/jogoDaMemoria/cardPinky.png", "6"],
            ["INKY", "./imagens/jogoDaMemoria/cardInky.png", "7"],
            ["INKY", "./imagens/jogoDaMemoria/cardInky.png", "7"],
            ["CLYDE", "./imagens/jogoDaMemoria/cardClyde.png", "8"],
            ["CLYDE", "./imagens/jogoDaMemoria/cardClyde.png", "8"],
            ["FLAPPY BIRD", "./imagens/jogoDaMemoria/cardFlappy.png", "9"],
            ["FLAPPY BIRD", "./imagens/jogoDaMemoria/cardFlappy.png", "9"],
            ["DONKEY KONG", "./imagens/jogoDaMemoria/cardDonkey.png", "10"],
            ["DONKEY KONG", "./imagens/jogoDaMemoria/cardDonkey.png", "10"],
            ["SONIC", "./imagens/jogoDaMemoria/cardSonic.png", "11"],
            ["SONIC", "./imagens/jogoDaMemoria/cardSonic.png", "11"],
            ["TAILS", "./imagens/jogoDaMemoria/cardTails.png", "12"],
            ["TAILS", "./imagens/jogoDaMemoria/cardTails.png", "12"]];

//Mistura as cartas
var embaralhar = [];

//Pontuação dos Jogadores
var pontuacao = [0, 0, 0, 0];

//Variável responsável por escolher de quem é a vez
var vez = 1;

//Variável que guarda o número de jogadores (por padrão 1)
var jogadores = 1;
var cores = ["dodgerblue", "coral", "rgb(230, 196, 4)", "rgb(1, 180, 46)"]

//Captura quantas cartas o jogador virou
var cartasViradas = 0;

//Pega qual carta foi virada
var carta1 = 0;
var carta2 = 0;

//Pega o id da carta virada
var carta1Id = 0;
var carta2Id = 0;

//Pega o id da ultima carta
var lastID = 0;

//Variável que confere quantas cartas foram viradas
var cartasCertas = 0;

//Desabilita todas as cartas
for (i = 0; i < 24; i++) {
    document.getElementById("switch" + (i + 1)).disabled = true;
}

//Pusha o número de cartas
for (var m = 0; m < cartas.length; m++) {
    embaralhar.push(m);
}

//Marca quais cartas ja foram viradas
var viradas = []
v = 0;

//Vira todas as cartas para baixo
viraCartas();

//Mostrando o modal do bootstrap
var galleryModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
});
galleryModal.show();

//Função que inicializa o jogo
function memoria() {
    //Retorna pontuação de todos os jogadores para zero
    var pontuacao = [0, 0, 0, 0];

    //Motra todas as pontuações igual a zero
    for(i = 0; i < 4; i++){
        document.getElementById("p"+(i+1)).innerHTML = "P" + (i+1) + " = " + 0;
    }

    //Coloca os valores de carta certa para o número de cartas
    cartasCertas = cartas.length;

    //Embaralha as cartas
    embaralhar = shuffleArray(cartas);

    //Colocas as imagens das cartas no jogo
    for (i = 0; i < cartas.length; i++) {
        document.getElementById("frente" + (i + 1)).src = cartas[i][1];
    }
}

//Função que captura o número de jogadores
function players(num) {
    jogadores = num;

    for(i = 0; i < num; i++){
        document.getElementById("p"+(i+1)).style.display = "block"
    }

    //Mostra do HTML que é a vez do Jogador 1
    document.getElementById("turno").innerHTML = "Vez do Player 1";
    document.getElementById("turno").style.color = cores[0];
}
//Função que faz todas as cartas virarem pra baixo
function viraCartas() {
    for (i = 0; i < 24; i++) {
        document.getElementById("switch" + (i + 1)).checked = true;
    }
}

//Função que altera elementos HTML a partir de quem é a vez
function rodada(turno){
    //Muda de quem é a vez
    document.getElementById("p"+turno).style.backgroundColor = cores[vez-1];
    document.getElementById("p"+turno).style.color = "white";

    //Volta ao normal de qum não é a vez
    for(i = 0; i < 4; i++){
        p = i+1
        if(p != turno){
            document.getElementById("p"+p).style.backgroundColor = "rgb(0, 0, 0, 0.0)";
            document.getElementById("p"+p).style.color = cores[i];
        }
    }

    //Exibe o texto de quem é o turno
    document.getElementById("turno").innerHTML = "Vez do Player " + turno;
    document.getElementById("turno").style.color = cores[vez-1];
}
//Função que verifica as cartas
function verifica(id) {

    var clicado = true;
    for(i = 0; i < cartas.length; i++){
        if(id == viradas[i]){
            clicado = false
            break;
        }else{
            clicado = true
        }
    }

    //Confere se não clicou na mesma carta duas vezes
    if (lastID != id && clicado == true) {

        //Pega o valor da ultima carta
        lastID = id;

        //Vira a carta para cima
        document.getElementById("switch" + id).checked = false;

        //Se for a primeira carta virada
        if (cartasViradas == 0) {
            //Pega o valor da carta 1
            carta1 = cartas[id - 1][2];

            //Pega o id da carta 1
            carta1Id = id
        }

        //Se for a segunda carta Jogada
        if (cartasViradas == 1) {
            //Pega o valor da carta 2
            carta2 = cartas[id - 1][2];

            //Pega o id da carta 2
            carta2Id = id
        }

        //Guarda quantas cartas foram viradas
        cartasViradas += 1;

        //verifica se as duas cartas foram viradas
        if (cartasViradas == 2) {
            //Verifica se a carta 1 e a carta 2 são as mesmas
            if (carta1 == carta2) {
                //Cartas viradas retorna para zero para que possa realizar outra rodada
                cartasViradas = 0;

                //Adiciona 1 para a pontuação da vez
                pontuacao[vez - 1] += 1;

                //Mostra no HTML a pontuação
                document.getElementById("p"+vez).innerHTML = "P" + vez + " = " + pontuacao[vez - 1];

                //Limpa o ultimo id para que possa fazer a próxima rodada
                lastID = 0;

                //Tira a quantidade de cartas certas
                cartasCertas -= 2;

                //Adiciona os IDs das cartas viradas no vetor
                viradas[v] = carta1Id;
                v++
                viradas[v] = carta2Id;
                v++

                //Verifica se o jogo acabou ou não (todas as cartas certas)
                if (cartasCertas == 0) {
                    //Após 1 segundo, executa a função de fim de jogo
                    setTimeout("fimDeJogo()", 1000);
                }
            } else {
                setTimeout("Retorna()", 1000);
                //Muda o jogador da vez
                vez++;
                //OBS: Se o jogador acetar a carta ele joga novamente

                //verifica se a vez está entre o numero de jogadores
                if (vez == jogadores + 1) {
                    //Volta pro jogador 1
                    vez = 1;
                }

                //Após 1 segundo, executa a função para virar as cartas para baixo
            }
        }
    }
}
//Função que acontece quando todas as cartas forem viradas
function fimDeJogo() {
    //Verifica quem é o jogador vencedor
    vencedor = 0;
    maiorPontuacao = 0;
    for(i = 0; i < 4; i ++){
        if(pontuacao[i] > maiorPontuacao){
            vencedor = i+1;
            maiorPontuacao = pontuacao[i]
        }
    }

    //Chama a função vitória
    Vitoria(vencedor, maiorPontuacao);

    //Retorna as cartas certas para o número de cartas para que seja possível realizar outra partida
    cartasCertas = cartas.length;

    //Vira todas as cartas para baixo novamente
    viraCartas();

    //Inicializa o jogo novamente
    setTimeout("memoria()", 1000);
}

//Função que acontece quando erra as cartas
function Retorna() {
    //Cartas viradas retorna para zero para que possa realizar outra rodada
    cartasViradas = 0;

    //Limpa o ultimo id para que possa fazer a próxima rodada
    lastID = 0;

    //Deixa as cartas erradas virada pra baixo novamente
    document.getElementById("switch" + carta1Id).checked = true;
    document.getElementById("switch" + carta2Id).checked = true;

    //Muda no html de qum é a vez
    rodada(vez);
}

//Função que embaralha as cartas
function shuffleArray(d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}

function Vitoria(winner, pts){
    Swal.fire({
        title: "🏆PARABÉNS🏆",
        text: "O VENCEDOR É O PLAYER " + winner + " COM SEUS " + pts + " PONTOS MARCADOS",
        imageUrl: "./imagens/jogoDaMemoria/Vitoria.gif",
        imageWidth: 500,
        imageHeight: 500,
        imageAlt: "Custom image"
    });
}