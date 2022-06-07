const express = require('express')
const bodyParser = require('body-parser')

const port = 3003

const app = express()
app.use(express.json()) 

const bancoDeDados = require('./bancoDeDados') // banco de dados

app.get('/produtos', (request, response) => {
    response.json( bancoDeDados.getProdutos() )
}) 

app.get('/produtos/:id', (request, response) => {
    response.send(bancoDeDados.getproduto(request.params.id))
}) 

// create product 
app.post('/produtos', (request, response) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome, 
        preco: request.body.preco
    })
    response.send(produto)
})
 
app.listen(port, () => {
    console.log('server local ok')
})