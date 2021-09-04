const mongoose = require('mongoose')
const Linguagem = require('../models/lingugensM')


//ler todas linguagens
const getAll = async(req, res) =>{
   const linguagem = await Linguagem.find()
   res.status(200).json(linguagem)
}

//criar
const createLinguagem = async(req, res) =>{
    const qualLinguagem = new Linguagem({
        _id: new mongoose.Types.ObjectId(),
        linguagem: req.body.linguagem,
        descrition: req.body.descrition,
        area: req.body.area,
        criadoEm: req.body.criadoEm
    })

    const linguagemJaExiste = await Linguagem.findOne({linguagem: req.body.linguagem})
        if(linguagemJaExiste){
            return res.status(409).json({error: 'Linguagem ja cadastrada!'})
        }

        try{
            const novaLinguagem = await qualLinguagem.save()
            res.status(201).json(novaLinguagem)
        }
        catch(err){
            res.status(400).json({message: err.message})
        }
}

module.exports = {
    getAll,
    createLinguagem
}