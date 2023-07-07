// Atividade 01:
// const path = require('path')
// const diretorio = '/laura/local/bin/script.js'

// console.log(path.basename(diretorio))

// Atividade 02:

// Atividade 03:
// const path = require('path')
// const diretorio = '/laura/local'
// const diterotio1 = '/bin/script.js'

// const diretorioFinal = path.join(diretorio,diterotio1)

// console.log(diretorioFinal)

// Atividade 04:
const path = require ('path')
const diretorio = '/laura/local/../bin/script.js'

console.log(path.normalize(diretorio))
