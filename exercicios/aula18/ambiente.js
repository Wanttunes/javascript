let num = [5, 8, 2, 9, 3] // Criação do vetor
console.log(`Nosso vetor é o ${num}`) // Mensagem sobre o vetor com os dados
num.push(1) // Ou num[5 ou último] = 1 para acrescentar mais um dado na ultima posição do vetor
console.log(`Nosso vetor novo é o ${num} com ${num.length} elementos`) // Mensagem sobre o vetor com os dados e a quantidade de dados
console.log(`O primeiro valor do vetor é ${num[0]}`) // Mensagem sobre o vetor com o primeiro dado do vetor
num.sort() // Colocando os dados dentro do vetor em ordem crescente
console.log(`Nosso vetor novo é o ${num} com ${num.length} elementos e agora em ordem Crescente!`) // Mensagem sobre o vetor agora com os números crescentes
console.log(`Agora o primeiro valor do vetor é ${num[0]} e o último é ${num[5]}`) // Mensagem sobre o vetor dizendo qual é o primeiro dado do vetor e qual é o último
let pos = num.indexOf(84)
if ( pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}
