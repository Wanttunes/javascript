function tabuada(){  
    let inum = document.getElementById('inum')
    
    let tab = document.getElementById('seltab')
    let msg = document.getElementById('list')
    if (inum.value.length == 0){
        window.alert('[ERRO] Nenhum número digitado')
    } else {
        let num = Number(inum.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.innerText = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}
    /*msg.innerText =
        `${num} x 1 = ${num*1}
        ${num} x 2 = ${num*2}
        ${num} x 3 = ${num*3}
        ${num} x 4 = ${num*4}
        ${num} x 5 = ${num*5}
        ${num} x 6 = ${num*6}
        ${num} x 7 = ${num*7}
        ${num} x 8 = ${num*8}
        ${num} x 9 = ${num*9}
        ${num} x 10 = ${num*10}

        Errado num tá...`*/