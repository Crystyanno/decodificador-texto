function updateStatus(found) {

    const statusText = document.getElementById('status-text');
    const copyButton = document.getElementById('btn-copy');

    if (found) {
        statusText.textContent = 'Texto encontrado';
        copyButton.style.display = 'block';
    } else {
        statusText.textContent = 'Nenhum texto encontrado';
        copyButton.style.display = 'none';
    }
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';

    if (inputText.trim() === '') {
        updateStatus(false);
    } else {
        for (let i = 0; i < inputText.length; i++) {
            encryptedText += String.fromCharCode(inputText.charCodeAt(i) + 3);
        }
        updateStatus(true);
    }

    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('outputText').value;
    let decryptedText = '';

    if (inputText.trim() === '') {
        updateStatus(false);
    } else {
        for (let i = 0; i < inputText.length; i++) {
            decryptedText += String.fromCharCode(inputText.charCodeAt(i) - 3);
        }
        updateStatus(true);
    }

    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    const outputText = document.getElementById('outputText');

    outputText.select();
    document.execCommand('copy');

    alert('Texto copiado para a área de transferência!');
}
