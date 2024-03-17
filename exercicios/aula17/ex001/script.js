function contar(){
    let inui = document.getElementById('iinicio')
    let ifim = document.getElementById('ifim')
    let ipasso = document.getElementById('ipasso')
    let res = document.getElementById('res')
    
    if (inui.value.length == 0 || ifim.value.length == 0 || ipasso.value.length == 0 ){ 
        //Confirmação de dados
        window.alert('[ERRO] Digite alguma valor para começar!')
    } else{
        res.innerHTML = 'Contando: '
        let inicio = Number(inui.value)
        let fim = Number(ifim.value)
        let passo = Number(ipasso.value)
        if (passo <= 0){ 
            //Confirmação de PASSO
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim){
            // Contagem crescente
            for(let c = inicio; c <= fim; c += passo){
                        res.innerHTML += ` ${c} \u{1F449}`
                    }
        } else{
            // Contagem regressiva
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
        }
    }
    