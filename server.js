const express = require("express")

const app = express() 


const db = require("./src/data/database")
db.connect()
app.use(express.json())


//TODAS ROTAS http://localhost:5555/areas
const router = require('./src/routes/areasR')
app.use('/areas', router)


// //ROTAS LINGUAGENS
const routerLinguagem = require('./src/routes/linguagensR')
app.use('/linguagens', routerLinguagem)



app.listen(2222, () => console.log('Servidor rodando na porta 2222'))