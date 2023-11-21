//Inicializa as casas com nove para sabermos que não foi clicado
var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];
//indica a vez do jogador - (1) xis  (-1) bola
var vez = 1;
//conta quantos cliques foram dados durante o jogo
var contaclique = 0;
//Placar
var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

//Função que verifica as jogadas
function verifica(casa){
    //Verifica se a casa não foi clicada
    if(casas[casa]==9){
        //modifica de 9 para o valor de jogador da vez
        casas[casa]=vez;
        //se o jogador da vez for 1, coloca o desenho do xis
        if(vez == 1){
            document.getElementById("img"+casa).src="imagens/jogoDaVelha/xis.png"
        //se o jogador da vez for -1, coloca o desenho da bola
        }else{
            document.getElementById("img"+casa).src="imagens/jogoDaVelha/bola.png"
        }

        //Iverte o jogador da vez
        vez *= -1;
        contaclique++

        //confere se houve vencedor
        confere();
    }
}

//Função que testa se houve vencedor
function confere(){
    var i;
    //Variável que marca se houve ganhador
    var lGanhou = false;
    //Variável que marca se o jogo acabou (todas casas clicadas)
    var lAcabou = true;
    //percorre todas as casas para verificar se ainda existe alguma não clicada
    for(i = 0; i < casas.length; i++){
        if(casas[i]==9){
            //se houver, sabemos que ainda não deu velha
            lAcabou = false;
        }
    }

    //se a quantidade de cliques forem 9, o jogo acabou
    if(contaclique == 9){
        lAcabou = true;
    }

    //Realiza a soma de cada coluna, linha e diagonal e coloca um valor num vetor
    var Soma = [];
    Soma[0]=casas[0]+casas[1]+casas[2]; //linha 1
    Soma[1]=casas[3]+casas[4]+casas[5]; //linha 2
    Soma[2]=casas[6]+casas[7]+casas[8]; //linha 3

    Soma[3]=casas[0]+casas[3]+casas[6]; //coluna 1
    Soma[4]=casas[1]+casas[4]+casas[7]; //coluna 2
    Soma[5]=casas[2]+casas[5]+casas[8]; //coluna 3

    Soma[6]=casas[0]+casas[4]+casas[8]; //diagonal 1
    Soma[7]=casas[2]+casas[4]+casas[6]; //diagonal 2

    //percorre todos os valores de soma
    for(i = 0; i < Soma.length; i++){
        //se achou uma soma (-3) é porque a bola ganhou
        if(Soma[i] == -3){
            lGanhou = true;
            sResposta = "TAILS GANHOU!"
            iPontosO ++;
            document.getElementById("bola").innerHTML =iPontosO;
            break;
            //se achou uma soma (3) é porque a xis ganhou
        }else if(Soma[i] == 3){
            lGanhou = true;
            sResposta = "SONIC GANHOU!"
            iPontosX ++;
            document.getElementById("xis").innerHTML =iPontosX;
            break;
        }
    }

    //se bola e nem xis ganhou, mas o jogo acabou, é porque deu velha
    if(lGanhou == false && lAcabou == true){
        sResposta = "DEU VELHA!";
        iPontosV ++;
        document.getElementById("velha").innerHTML = "VELHA: "+ iPontosV;
    }

    //Se alguem ganhou ou o jogo acabou
    if(lAcabou || lGanhou){
        //desabilita todas as casas para não ser mais clicadass
        for(i = 0; i < casas.length; i++){
            document.getElementById("casa"+i).disabled = true;
            casas[i] = 0;
        }

        //exibe o resultado
        document.getElementById("resposta").innerHTML = sResposta;
        //muda a cor da letra
        document.getElementById("resposta").style.color = "orangered";
        //muda o tamanho do texto
        document.getElementById("resposta").style.fontSize = "70px";
    }
}

//Função que recomeça o jogo
function recomeca(){
    for(i = 0; i < casas.length; i++){
        //não permite arrastar a imagem
        document.getElementById("img"+i).ondragstart = function() {return false};

        //habilita as casas
        document.getElementById("img"+i).disabled = false;

        //remove as imagens
        document.getElementById("img"+i).src="";

        //Volta a configuração original
        document.getElementById("resposta").innerHTML = "RESULTADO: ";
        document.getElementById("resposta").style.color = "#f5ff00";
        document.getElementById("resposta").style.fontSize = "70px";

        //restaura os 9 das casas
        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        contaclique = 0;
        vez = 1;
    }
}