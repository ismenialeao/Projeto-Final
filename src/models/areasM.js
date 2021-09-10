const mongoose = require('mongoose')

const areaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    sobre:{
      type: String,
      required: true
    },
    criadoEm: { //data e horario em que foi criado
      type: Date,
      required: true,
      default: new Date
    },
    
    
})
const areaM = mongoose.model('areaM', areaSchema)
module.exports = areaM