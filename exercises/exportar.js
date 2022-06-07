const moduloB = require("./moduloB");

console.log(module.exports === this); 
console.log(module.exports === exports)

this.a = 1; 
exports.b = 2
module.exports.c = 3

exports = null; 
exports = {
    nome: 'Testando...'
}

console.log(module.exports)
// Os valores permanecem o mesmo SEMPRE UTILIZAR module.exports