let botao = document.getElementById('botao-gerar');
let quantidade = document.getElementById('quantidade');

addEventListener('click', function() {

    let maiusculas = document.getElementById('maiusculas');
    let minusculas = document.getElementById('minusculas');
    let numeros = document.getElementById('numeros');
    let caracteres = document.getElementById('caracteres');

    if (maiusculas.checked || minusculas.checked || numeros.checked || caracteres.checked) {

        botao.removeAttribute('disabled');
    } else {
        botao.setAttribute('disabled', true);
    }

});

function gerar() {
    let quantidade = document.getElementById('quantidade').value;
    let resultado = document.getElementById('senha');

    let maiusculas = document.getElementById('maiusculas');
    let minusculas = document.getElementById('minusculas');
    let numeros = document.getElementById('numeros');
    let caracteres = document.getElementById('caracteres');

    let itens = '';

    resultado.value = '';

    if (maiusculas.checked) {
        itens += 'ABCDEFGHIJKLMNOPQRSTUVWYXG';
    }
    if (minusculas.checked) {
        itens += 'abcdefghijklmnopqrstuvwyxz';
    }
    if (numeros.checked) {
        itens += '0123456789';
    }
    if (caracteres.checked) {
        itens += '!@#$%^&*()-_=+[]{};:,./<>/?~';
    }

    for (let i = 0; i < quantidade; i++) {
        let indiceAleatorio = Math.floor(Math.random() * itens.length);
        let senha = itens[indiceAleatorio];

        resultado.value += senha;
        
        console.log(senha);
    }

    resultado.removeAttribute('disabled');
}

let resultado = document.getElementById('senha');
let copiar = document.getElementById('copiar');

copiar.addEventListener('click', function() {

    if(resultado.value !== '') {
        navigator.clipboard.writeText(resultado.value).then( function() {
            alert('Senha copiada para a área de transferência!');
        });
    }
});

/*
botao.addEventListener('click', function() {
    if(resultado !== '') {
        resultado.value = '';
    }
});*/
