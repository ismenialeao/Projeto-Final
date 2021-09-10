const mongoose = require('mongoose')

const linguegensSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    linguagem: {
        type: String,
        required: true
    },
    descrition:{
        type: String,
        required: true
    },
    area:{
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'areaM'

    },
    criadoEm:{
        type: Date, 
        required: true,
        default: new Date
        
    },
    versionKey: false
});


const linguagens = mongoose.model('linguagens', linguegensSchema)
module.exports = linguagens