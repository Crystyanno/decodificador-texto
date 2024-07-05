function codifica(texto) {
    let encryptedText = '';
    for (let i = 0; i < texto.length; i++) {
        encryptedText += String.fromCharCode(texto.charCodeAt(i) + 3);
    }
    return encryptedText;
}

function decodifica(texto) {
    let decryptedText = '';
    for (let i = 0; i < texto.length; i++) {
        decryptedText += String.fromCharCode(texto.charCodeAt(i) - 3);
    }
    return decryptedText;
}

function escreveCodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");
    
    resultado.textContent = codifica(inputTexto.value);
}

function escreveDecodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");

    resultado.textContent = decodifica(inputTexto.value);
}

var inputTexto = document.querySelector(".input-texto");
var resultado = document.querySelector(".resultado");

var btnCodificar = document.querySelector(".btn-codificar");
var btnDecodificar = document.querySelector(".btn-decodificar");

var mensagensErro = document.querySelector(".mensagens-erro");

btnCodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveCodificado();
    mensagensErro.innerHTML = "";
}

btnDecodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }
    
    escreveDecodificado();
    mensagensErro.innerHTML = "";
}