pontuacao = 0;

//Função principal do jogo
function Jogar(){
    
    //1 - Pedra
    //2 - Papel
    //3 - Tesoura

    //Pedra -> Tesoura
    //Tesoura -> Papel
    //Papel -> Pedra

    //Elemento do Computador - Aleatório

    //Habilitando os botões
    document.getElementById("pedra").disabled = false;
    document.getElementById("papel").disabled = false;
    document.getElementById("tesoura").disabled = false;

    //Criando elemento aleatório do computador
    elementoComp = Math.floor(Math.random() * 3) + 1

    //Configuração de Tempo
    tempo = 3;
    ms = 1000;

    //Contagem Regressiva
    document.getElementById("tempo").innerHTML = "4"
    for(i = 0; i < 4; i ++){
        ms += 1000
        setTimeout(function(){
            document.getElementById("tempo").innerHTML = tempo
            tempo = tempo - 1;
        }, ms);
    }
    
    //Função ao não realizar jogadas quando acabar o tempo
    setTimeout(function(){
        pontuacao -= 1;
        Parar();
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
    }, 5000);
}

//Função para Desabilitar botões ao escolher ou acabar o tempo
function Parar(){
    document.getElementById("pedra").disabled = true;
    document.getElementById("papel").disabled = true;
    document.getElementById("tesoura").disabled = true;
    
    document.getElementById("jogar").innerHTML = "Jogar Novamente";
}

//Jogo Pedra
function pedra(){
    //Vitória
    if(elementoComp == 3){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Vitória!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Tesoura";
        pontuacao += 3;
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }

    //Derrota
    if(elementoComp == 2){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Derrota!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Papel";

        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }

    //Empate
    if(elementoComp == 1){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Empate!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Pedra";
        pontuacao += 2;
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }
}

//Jogo Papel
function papel(){
    //Vitória
    if(elementoComp == 1){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Vitória!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Pedra";
        pontuacao += 3;
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }

    //Derrota
    if(elementoComp == 3){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Derrota!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Tesoura";
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }

    //Empate
    if(elementoComp == 2){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Empate!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Papel";
        pontuacao += 2;
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }
}

//Jogo Tesoura
function tesoura(){
    //Vitória
    if(elementoComp == 2){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Vitória!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Papel";
        pontuacao += 3;
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }

    //Derrota
    if(elementoComp == 1){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Derrota!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Pedra";
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }

    //Empate
    if(elementoComp == 3){
        acionado = true;
        document.getElementById("resultado").innerHTML = "Empate!";
        document.getElementById("inimigo").innerHTML = "Escolha do inimigo: Tesoura";
        pontuacao += 2;
        document.getElementById("pontuacao").innerHTML = "Pontos: " + pontuacao;
        Parar();
    }
}