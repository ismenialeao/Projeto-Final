const mongoose = require('mongoose')

const Area = require('../models/areasM')

const getAll = async(req,res) =>{
    const areas = await Area.find()
    res.json(areas)
}


const createAreas = async(req,res) =>{
    const qualArea = new Area({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        criadoEm: req.body.criadoEm,
    })

    const araJaexiste = await Area.findOne({name: req.body.name})
        if(araJaexiste){
            return res.status(409).json({error: 'Area ja cadastrada!'})
        }

        try{
            const novaArea = await qualArea.save()
            res.status(201).json(novaArea)
        }
        catch(err){
            res.status(400).json({message: err.message})

        }
        
}
const update = async(req, res) =>{
    try{
        const edit = await Area.findById(req.params.id)
        if(edit ==!null){
            return res.status(404).json({message: "Area não encontrada"})
        }
        if (req.body.name != null){
            edit.name = req.body.name
        }
        const editAtualizado = await edit.save()
        res.status(200).json(editAtualizado)
    
    }   catch (err){
            res.status(500).json({message: err.message})
    }
}

module.exports = {
    getAll,
    createAreas,
    update,
}