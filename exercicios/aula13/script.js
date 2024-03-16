function carregar(){
    var title = document.querySelector('h1')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} `
    if (hora >= 6 && hora <= 11){
        title.innerText = 'Bom dia!',
        img.src = 'imagem/foto-manhã.jpg',
        document.body.style.backgroundColor = '#95840590'
    }else if( hora >= 12 && hora <= 17){
        title.innerText = 'Boa tarde!',
        img.src = 'imagem/foto-tarde.jpg'
        document.body.style.backgroundColor = '#653316d5'
    }else{
        title.innerText = 'Boa noite!',
        img.src = 'imagem/foto-noite.jpg'
        document.body.style.backgroundColor = '#030C0F'
    }
}
