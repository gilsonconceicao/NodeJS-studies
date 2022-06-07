const express = require('express');
const port = 3003; 

const app = express(); 
app.use(express.json());

const cursos = [ 'FullStack Master', 'Desenvolvimento de games', 'Viver de youtube' ];

// retorna apenas um curso 
app.get('/cursos/:index', (request, response) => {
    const {index} = request.params;

    return response.json(cursos[index]);
} );

// retorna todos os cursos 
app.get('/cursos' , (request, response) => {
    return response.json(cursos)
})

// criar um novo curso // add 
app.post('/addcursos', (request, response) => {
    const {nome} = request.body; 
    
    cursos.push(nome);

    return response.json(nome);

})

// atualizar cursos 
app.put('/curso/update/:index', (request, response) => {
    const {index} = request.params; 
    const {nome} = request.body; 

    cursos[index] = nome 
    return response.json({"status": "Atualizado com sucesso!"})
})

// excluir algum curso
app.delete('/curso/delete/:index', (request, response) => {
    const { index } = request.params 

    cursos.splice(index, 1)
 
    return response.status(204).json() 
}) 

app.listen(port, () => {
    console.log('server ok - crud.js');
});