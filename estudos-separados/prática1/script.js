function clicou(){
    let form = document.getElementById('adicionar')
    let label = document.createElement('label')
    let select = document.createElement('select')
    label.innerHTML = ('<br><label>Confirmar senha: </label>')
    select.innerHTML += ('<option>Sim?</option>')
    select.innerHTML += ('<option selected>Não?</option>')
    form.appendChild(label)
    form.appendChild(select)
}
