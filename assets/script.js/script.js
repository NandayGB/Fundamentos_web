let nome = document.getElementById('nome');
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

let nomeOK = false;
let emailOK = false;
let assuntoOK = false;

function validaNome() {
    let texto = document.querySelector('#txtNome');
    if (nome.value.length < 2) {
        alert('Nome inválido');
        texto.innerHTML = 'Nome inválido';
        texto.style.color = "red";
        nomeOK = false;
    } else {
        texto.innerHTML = 'Nome válido';
        texto.style.color = "green";
        nomeOK = true;
    }
}

function validaEmail() {
    let texto = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1) {
        alert('Email inválido');
        texto.innerHTML = 'Email inválido';
        texto.style.color = "red";
        emailOK = false;
    } else {
        texto.innerHTML = 'Email válido';
        texto.style.color = "green";
        emailOK = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
    if (assunto.value.length >= 200) {
        txtAssunto.innerHTML = "Esse texto só pode ter até 200 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = 'block';
        assuntoOK = false;
    } else {
        txtAssunto.style.display = 'none';
        assuntoOK = true;
    }
}

function enviar() {
    validaNome();
    validaEmail();
    validaAssunto();

    if (nomeOK && emailOK && assuntoOK) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário corretamente antes de enviar.');
    }
}