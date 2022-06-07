const fs = require('fs') 

const produto = {
    nome: 'Celular', 
    preco: 2812, 
    desconto: 0.17
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
}) 