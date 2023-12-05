function troca(){
    palavra = document.getElementById("palavra").value;

    document.getElementById("palavra1").innerHTML= palavra
    document.getElementById("palavra2").innerHTML= palavra
    document.getElementById("palavra3").innerHTML= palavra
    document.getElementById("palavra4").innerHTML= palavra
}

function resetar(){
    document.getElementById("palavra1").innerHTML= "Mario"
    document.getElementById("palavra2").innerHTML= "Mario"
    document.getElementById("palavra3").innerHTML= "castelo"
    document.getElementById("palavra4").innerHTML= "Mario"
}
