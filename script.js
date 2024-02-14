var button = document.querySelector('input#btn')
button.addEventListener('click', clicar)
function clicar() {
    var br = 'Brasil' // Para que a condição do if funcione, é preciso acrescentar variáveis, por isso foram criadas var br e var us
    var us = 'USA' // Para que a condição do if funcione, é preciso acrescentar variáveis, por isso foram criadas var br e var us
    var país = document.querySelector('input#pais')
    var res = document.querySelector('div#rec')
    var country = (país.value)
    if(country == br || country == us){
        res.innerHTML += '<p>Leia As 6 lições<p>'
    } else{
        res.innerHTML += '<p>Leia O Mestre dos mestres</p>'
    }
}

function reset(){
    var display = document.querySelector('div#rec')
    display.innerHTML = ''
}