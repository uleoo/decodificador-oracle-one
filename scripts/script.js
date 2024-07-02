var inputUsuario;
var output = document.getElementById("output");
var criptografado;
function Criptografar() {
    document.getElementById("imgout").style.display = "none";
    document.getElementById("subtituloOutput").style.display = "none";
    inputUsuario = document.getElementById("inputUsuario")
    criptografado = inputUsuario.value.split('')
    for(var i = 0; i < criptografado.length; i++) {
        if (criptografado[i] == "e") {
            criptografado[i] = "enter"
        } else if (criptografado[i] == "i") {
            criptografado[i] = "imes"
        } else if (criptografado[i] == "a") {
            criptografado[i] = "ai"
        } else if (criptografado[i] == "o") {
            criptografado[i] = "ober"
        } else if (criptografado[i] == "u") {
            criptografado[i] = "ufat"
        }
    }
    console.log(criptografado)
    var resultado = criptografado.join("");
    output.value = output.innerHTML = resultado
}

function Descriptografar() {
    resultado = criptografado.join("");
    var result = resultado.replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    output.value = output.innerHTML = result
}