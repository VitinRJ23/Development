var button = document.querySelector('input#btn')
button.addEventListener('click', clicar)
function mouse(){
    alert('Escreva o gênero na barra de texto ao centro da tela')
}
function clicar() {
    var ação = 'Ação'.toLowerCase(); // Para que a condição do if funcione, é preciso acrescentar variáveis, por isso foram criadas var br e var us
    var aventura = 'Aventura'.toLowerCase()
    var drama = 'Drama'.toLowerCase()
    var brasil = 'Brasileiro'.toLowerCase()
    var comedy = 'Comédia'.toLowerCase()
    var genre = document.querySelector('input#genre')
    var res = document.querySelector('div.rec')
    var escolha = (genre.value.toLowerCase())
    if(escolha == ação){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-230453/" target="_blank">Em ritmo de fuga</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/17/07/10/19/10/576841.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    }    
    if(escolha == aventura){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-130368/" target="_blank">Up, altas aventuras</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/03/73/20176438.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 
    if(escolha == drama){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-281330/" target="_blank">Não olhe para cima</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/21/12/06/21/17/3973076.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 
    if(escolha == brasil){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-133548/" target="_blank">Tropa de Elite</a><p>'
        res.innerHTML += '<img src="https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/22/38/19873277.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 
    if(escolha == comedy){
        res.innerHTML = '<p>Assista: <a href="https://www.adorocinema.com/filmes/filme-265987/" target="_blank">Tudo bem no Natal que vem</a><p>'
        res.innerHTML += '<img src="https://br.web.img3.acsta.net/c_310_420/pictures/20/10/09/19/10/1081565.jpg" alt="capa">'
        res.innerHTML += '<p>Obs: clique em reset para que possa surgir uma nova recomendação'
    } 


    if(escolha == ''){
        res.innerHTML = ''
        alert('Preencha um gênero válido!')
    }

}
function reset(){
    var display = document.querySelector('div.rec')
    var erase = document.querySelector('input#genre')
    display.innerHTML = ''
    erase.value = ''
}

