var inputNome = document.getElementById('NomeUsuario');
var inputEmail = document.getElementById('EmailUsuario');
var inputTelefone = document.getElementById('TelefoneUsuario');
var inputMensagem = document.getElementById('MensagemUsuario');


// os 4 métodos a seguir tiram os erros em caso de digitação - pag fale conosco
inputNome.addEventListener("keyup", function () {
    document.getElementById('mensagemErroNome').style.display = 'none';
});

inputEmail.addEventListener("keyup", function () {
    document.getElementById('mensagemErroEMail').style.display = 'none';
});

inputTelefone.addEventListener("keyup", function () {
    document.getElementById('mensagemErroTelefone').style.display = 'none';
});


inputMensagem.addEventListener("keyup", function () {
    document.getElementById('mensagemErroMensagem').style.display = 'none';
});

//contador de caracteres - pagina fale conosco
inputMensagem.addEventListener("keyup", function () {
    document.getElementById('qntCaracteres').innerHTML = "Caractere(s) inseridos: " + this.value.length;
})

//validacao faleConosco
function validarFormularioFaleConosco() {
    var inputNome = document.getElementById('NomeUsuario');
    var inputEmail = document.getElementById('EmailUsuario');
    var inputTelefone = document.getElementById('TelefoneUsuario');
    var inputMensagem = document.getElementById('MensagemUsuario');

    if (inputNome.value.length < 3) {
        document.getElementById('mensagemErroNome').style.display = 'block';
        event.preventDefault();
    }

    if (inputEmail.value.length < 5 || !(inputEmail.value.includes('@')) || !(inputEmail.value.includes('.'))) {
        document.getElementById('mensagemErroEMail').style.display = 'block';
        event.preventDefault();
    }

    if (inputTelefone.value.length < 10) {
        document.getElementById('mensagemErroTelefone').style.display = 'block';
        event.preventDefault();
    }

    if (inputMensagem.value.length < 10 || inputMensagem.value.length > 1000) {
        document.getElementById('mensagemErroMensagem').style.display = 'block';
        event.preventDefault();
    }


    alert('Mesmo estando com campos corretos ou incorretos, o formulario nao enviado, pois a funcionalidade ainda não foi implementada! Desculpe!');
    alert('Mesmo assim, caso os campos tenham sido preenchidos incorretamente, eles ficarão em vermelho!!')
    event.preventDefault();
}


