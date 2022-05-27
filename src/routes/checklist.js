const express = require('express');

const router = express.Router(); //Criando um Objeto de rotas

const Checklist = require('../models/checklist')


router.get('/', async (req, res)=>{
    try{
        let checklists = await Checklist.find({})
        res.status(200).json(checklists)
    }catch(erro){
        res.status(500).json(erro)
    }
})

router.get('/:id', async (req, res)=>{
    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist)
    }catch(erro){
        res.status(500).json(erro)
    }
})


router.put('/:id', async(req, res)=>{
    try{
        let {name} = req.body
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true})
        res.status(200).json(checklist)
    }catch(erro){
        res.status(422).json(erro)
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        let {name} = req.body
        let checklist = await Checklist.findByIdAndDelete(req.params.id, {name})
        res.status(200).json(checklist)
    }catch(erro){
        res.status(422).json(erro)
    }
})


router.post('/', async (req, res) =>{
    let {name} = req.body
    
    try{
        let checklist = await Checklist.create({name})
        res.status(200).json(checklist)
    }catch(error){
        res.status(422).json(error)
    }
})








module.exports = router