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
    for(var i = 0; i < criptografado.length; i++) {
        if (criptografado[i] == "enter") {
            criptografado[i] = "e"
        } else if (criptografado[i] == "imes") {
            criptografado[i] = "i"
        } else if (criptografado[i] == "ai") {
            criptografado[i] = "a"
        } else if (criptografado[i] == "ober") {
            criptografado[i] = "o"
        } else if (criptografado[i] == "ufat") {
            criptografado[i] = "u"
        }
    }
    console.log(criptografado)
    resultado = criptografado.join("");
    output.value = output.innerHTML = resultado
}