const mongoose = require('mongoose')
const Linguagem = require('../models/lingugensM')


const getAll = async(req, res) =>{
   const linguagem = await Linguagem.find()
   res.status(200).json(linguagem)
}

const getAllFront = async(req, res) =>{
    const front = req.params.area
    const filterFront = await Linguagem.find({area:front})
        if(filterFront){
            res.json(filterFront)
        }
        else{
            res.status(404).send()
        }
}

const getAllBack = async(req,res) =>{
    const back = req.body.area
    const FilterBack = await Linguagem.find({area: back})
        if(FilterBack){
            res.json(FilterBack)
        }
        else{
            res.status(404).send()
        }
}

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

const update = async(req, res) =>{
    try{
        const mundanca = await Linguagem.findById(req.params.id)
        if(mundanca ==!null){
            return res.status(404).json({message: "Linguagem não encontrada"})
        }
        if (req.body.linguagem != null){
            mundanca.linguagem = req.body.linguagem
        }
        const mudancaAtualizada = await mundanca.save()
        res.status(200).json(mudancaAtualizada)
    
    }   catch (err){
            res.status(500).json({message: err.message})
    }
}
const deleteLinguagem = async(req, res) =>{
    const deleted = await Linguagem.findById(req.params.id)
    if(!deleted){
        return res.status(404).json({'message' : 'Linguagem not found!'})
    }

    try{
        await deleted.remove()
        res.status(200).json({'message': 'Deletado com sucesso!'})
    }
    catch (err){
        res.status(500).json({'message': 'erro'})
    }
}
    
 


module.exports = {
    getAll,
    getAllFront,
    getAllBack,
    createLinguagem,
    update,
    deleteLinguagem
    
}