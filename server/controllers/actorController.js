const uuid = require('uuid')
const path = require('path')
const { Actor, PersonalActor } = require('../models/models')

class ActorController {
    async create(req, res){
        try {

            const {name, score, personalscore, gender} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
    
            const actor = await Actor.create({name, gender, score, personalscore, img: fileName})
            return res.json(actor)

        } catch (error) {
            console.log(error)
        }
    }

    async PersonalCreate(req, res){
        try {

            const {name, score, gender, img, user_id} = req.body
            const actor = await PersonalActor.create({name, gender, score, img, user_id})
            return res.json(actor)

        } catch (error) {
            console.log(error)
        }
    }

    async GetPA(req, res){
        const {id} = req.query
        const actor = await PersonalActor.findAll({where:{user_id: id}})
        return res.json(actor)
    }

    async getAll(req, res){
        const {gender} = req.query
        let actors;
        if(!gender){
            actors = await Actor.findAll()
        }
        if(gender === "man"){
            actors = await Actor.findAll({where:{gender: "man"}})
        }
        if(gender === "woman"){
            actors = await Actor.findAll({where:{gender: "woman"}})
        }
        return res.json(actors)
    }

    async delete(req, res){
        const {id} = req.query
        await Actor.destroy({where: {id: id}})
        return res.json({message:'all work'})
    }

    async update(req, res){
        const {score, id} = req.query
        await Actor.update({score: score}, {where: {id: id}})
        return res.json({message:'all work'})
    }
}

module.exports = new ActorController()