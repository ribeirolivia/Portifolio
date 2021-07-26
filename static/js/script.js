let inputNome = document.querySelector('#nome') 
let inputEmail = document.querySelector('#email')
let textareaMensagem = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#enviar')
let nomeOk = false 
let emailOk = false 
let msgOk = false 
btnEnviar.disabled = true 

function clickproj1(){
    window.open('https://github.com/ribeirolivia/Projetos/tree/main/ProjetoFinal%20_Jogo_Gafanhoto_Vermelho')
}
function clickproj2(){
    window.open('https://ribeirolivia.github.io/Projeto1/')
}
function clickproj3(){
    window.open('https://plannerdiario.herokuapp.com/')
}
function clickproj4(){
    window.open('https://github.com/ribeirolivia/Portifolio')
}

inputNome.addEventListener('keydown', () => {
    if(inputNome.value.length < 2){      
        inputNome.style.borderColor ='red'
        nomeOk = false
    } else {
        inputNome.style.borderColor ='green'
        nomeOk = true
    }
    if(inputNome.value == '' || inputNome.value == undefined || inputNome.value == null) {
        inputNome.style.borderColor = '#ccc'
    }
    if (nomeOk && emailOk && msgOk) { 
    btnEnviar.disabled = false
    } else { 
    btnEnviar.disabled = true
    }

})
inputEmail.addEventListener('keydown', () => {
    if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.') == -1){
        inputEmail.style.borderColor = 'red'
        emailOk = false
    } else {
        inputEmail.style.borderColor = 'green'
        emailOk = true
    }
    if (nomeOk && emailOk && msgOk) {
        btnEnviar.disabled = false
    } else { 
        btnEnviar.disabled = true
        }
    })

textareaMensagem.addEventListener('keydown', () =>{
    if(textareaMensagem.value.length > 100){
        textareaMensagem.style.borderColor = 'red'
        msgOk = false
    } else{
        textareaMensagem.style.borderColor = 'green'
        msgOk = true
    }
    if (nomeOk && emailOk && msgOk) {
        btnEnviar.disabled = false
    } else { 
        btnEnviar.disabled = true
    }    
})

btnEnviar.addEventListener('click', () => {
    
    let carregamento = document.querySelector('#carregamento')
    
    carregamento.style.display = 'flex'
    
    let form = document.querySelector('form')
    
    form.style.display = 'none'
 })

