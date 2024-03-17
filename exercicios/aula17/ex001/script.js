function verificar(){
    var anon = document.getElementById('iano')
    var res = document.getElementById('msg')
    var data = new Date
    var anoA = data.getFullYear()

    if(Number(anon.value) == 0 || Number(anon.value) >= anoA ){
        window.alert(`[ERRO]Tente novamente!`)
        return
    }else{
        var sexo = document.getElementsByName('sex')
        var idade = anoA - Number(anon.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked){
        gênero = ('um Homem')
        if(idade >= 1 && idade <= 17) {
            img.setAttribute('src','imagens/homem-crianca.jpg')

        } else if (idade <= 50){
            img.setAttribute('src','imagens/homem-adulto.jpg')
        } else {
            img.setAttribute('src','imagens/homem-velho.jpg')
        }
    } else if (sexo[1].checked){
        gênero = ('uma Mulher')
        if(idade >= 1 && idade <= 17) {
            res.innerText = `Detectamos ${gênero} com ${idade} anos.`
            img.setAttribute('src','imagens/mulher-crianca.jpg')
        } else if (idade <= 50){
            res.innerText = `Detectamos ${gênero} com ${idade} anos.`
            img.setAttribute('src','imagens/mulher-adulta.jpg')
        } else {
            res.innerText = `Detectamos ${gênero} com ${idade} anos.`
            img.setAttribute('src','imagens/mulher-velha.jpg')
        }
    } 
    
       
    }
res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
res.appendChild(img)
    
}