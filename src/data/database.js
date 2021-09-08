//CRIANDO MINHA CONEXÃO

// require('dotenv').config()
// const mongoose = require("mongoose")

// const MONGO_URL = process.env.MONGODB_URI

// const connect = () => mongoose.connect(MONGO_URL, {

//     useNewUrlParser: true,
//     useUnifiedTopology: true

// })
//     .then(console.log('Database conectada com sucesso.'))
//     .catch(err => console.err)

// module.exports= {connect}


require('dotenv').config()
const mongoose = require("mongoose")


const connect = () => {mongoose.connect(process.env.DATABASE_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(console.log('Database conectada com sucesso.'))
    .catch(err => console.err)
}
module.exports= {connect}


