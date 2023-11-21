document.getElementById("resultado").style.background = "url('./imagens/personagens/fundos/padrao.png')"

function imprimir(personagem) {
  id = personagem + 1;
  fetch(`http://localhost:3000/personagens/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        document.getElementById("resultado").style.background = "url('" + data.fundo + "')"
        document.getElementById("imagem").innerHTML = "<img src='" + data.foto + "' alt=''>";
        document.getElementById("nome").innerHTML = data.nome;
        document.getElementById("criacao").innerHTML = data.criacao;
        document.getElementById("jogo").innerHTML = data.jogo;
        document.getElementById("descricao").innerHTML = data.descricao;
    });
}