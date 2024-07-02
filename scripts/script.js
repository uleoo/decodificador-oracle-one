var inputUsuario;
var output = document.getElementById("output");
var result;

function Criptografar() {
    document.getElementById("imgout").style.display = "none";
    document.getElementById("subtituloOutput").style.display = "none";
    inputUsuario = document.getElementById("inputUsuario").value
    result = inputUsuario.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
    output.value = output.innerHTML = result
}

function Descriptografar() {
    document.getElementById("imgout").style.display = "none";
    document.getElementById("subtituloOutput").style.display = "none";
    inputUsuario = document.getElementById("inputUsuario").value
    result = inputUsuario.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
    output.value = output.innerHTML = result
}