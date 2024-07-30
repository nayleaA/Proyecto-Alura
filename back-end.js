document.addEventListener('DOMContentLoaded', () => {
    const encodeButton = document.getElementById('encodeButton');
    const decodeButton = document.getElementById('decodeButton');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const alert = document.createElement('div');
    alert.classList.add('alert');
    inputText.parentElement.insertBefore(alert, inputText.nextSibling);

    encodeButton.addEventListener('click', () => {
        const text = cleanText(inputText.value);
        if (text) {
            outputText.value = encode(text);
            alert.style.display = 'none';
        } else {
            alert.textContent = 'El texto no debe contener mayúsculas ni caracteres especiales.';
            alert.style.display = 'block';
            outputText.value = '';
        }
    });

    decodeButton.addEventListener('click', () => {
        const text = cleanText(inputText.value);
        if (text) {
            outputText.value = decode(text);
            alert.style.display = 'none';
        } else {
            alert.textContent = 'El texto no debe contener mayúsculas ni caracteres especiales.';
            alert.style.display = 'block';
            outputText.value = '';
        }
    });

    function cleanText(text) {
        // Convertir a minúsculas y eliminar caracteres especiales
        return text.toLowerCase().replace(/[^a-z\s]/g, '');
    }

    function encode(text) {
        // Ejemplo de codificación: sustituir cada letra por su valor Unicode + 1
        // Solo permitir caracteres dentro del rango ASCII imprimible
        return text.split('').map(char => {
            const newCharCode = char.charCodeAt(0) + 1;
            return newCharCode > 122 ? String.fromCharCode(97) : String.fromCharCode(newCharCode); // wrap around
        }).join('');
    }

    function decode(text) {
        // Ejemplo de decodificación: revertir la codificación
        // Solo permitir caracteres dentro del rango ASCII imprimible
        return text.split('').map(char => {
            const newCharCode = char.charCodeAt(0) - 1;
            return newCharCode < 97 ? String.fromCharCode(122) : String.fromCharCode(newCharCode); // wrap around
        }).join('');
    }
});
