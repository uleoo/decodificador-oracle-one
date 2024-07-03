var inputUsuario;
var output = document.getElementById("output");
var result;
var botaoCopiar = document.getElementById("botao-copiar");
botaoCopiar.style.display = "none"

botaoCopiar.addEventListener("click", () => {
    console.log('ok2');
    navigator.clipboard.writeText(output.value);
})

function criptografar() {
    inputUsuario = document.getElementById("input-usuario").value;
    result = inputUsuario.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    output.value = output.innerHTML = result;
    limpar()
}

function descriptografar() {
    inputUsuario = document.getElementById("input-usuario").value;
    result = inputUsuario.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    output.value = output.innerHTML = result;
    limpar()
}
function limpar () {
    document.getElementById("img-out").style.display = "none";
    document.getElementById("subtitulo-output").style.display = "none";
    botaoCopiar.style.display = "";
    inputUsuario = document.getElementById("input-usuario");
    inputUsuario.value = '';
}