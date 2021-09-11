const express = require("express")

const app = express() 
const cors = require("cors");

app.use(cors())

const db = require("./src/data/database")
db.connect()
app.use(express.json())


//ROTA AREA
const router = require('./src/routes/areasR')
app.use('/areas', router)


//ROTAS 
const routerLinguagem = require('./src/routes/linguagensR')
app.use('/linguagens', routerLinguagem)

const PORT = process.env.PORT || 2222

app.listen(PORT, () => console.log('Servidor rodando na porta 2222'))