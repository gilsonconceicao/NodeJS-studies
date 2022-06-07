const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' 

const axios = require('axios')

// methods
const chinese = funcionario => funcionario.pais === 'China' 
const genere = funcionario => funcionario.genero === 'F' 

const getSalario = (funCurrent, salarioFun) => {
    return funCurrent.salario < salarioFun.salario ? funCurrent : salarioFun 
}

// get url from axios 
axios.get(url).then( response => {
    const funcionarios = response.data

    const funMethods = funcionarios.filter(chinese).filter(genere).reduce(getSalario)

    console.log(funMethods)
})
