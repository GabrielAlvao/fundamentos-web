// Criação das variáveis

//var idade = 35 // não é mais indicado pelo padrão EcmaScript


//let idade = 35//padrão indicado pelo EcmaScript ->Valores que vão mudar
//const idade = 35// padrão indicado pelo EcmaScript -> Valores que não irão mudar

//Gets de Elementos

//DOM - document

//Por Tag: document.getElementsByTagName('img')
//Por ID: document.getElementById('id')
//Por Nome: document.getElementsByName('nome')
//por Classe: document.getElementsByClassName('classe')
//Por Seletor: document.querySelector('.classe' ou 'nome' ou '#id')

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '120%'
assunto.style.width = '120%'
email.style.width = '120%'
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 ){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Ultrapassou o limite de caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.innerHTML = 'máximo 100 caracteres'
        txtAssunto.style.color = 'gray'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Sua mensagem foi enviada com sucesso')
    } else {
        alert('Preencha o formulário corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style;width = '600px'
}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style;width = '250px'
}