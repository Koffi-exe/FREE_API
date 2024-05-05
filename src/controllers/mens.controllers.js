import MensRanking from "../models/mens100.models.js"

const createMens = async (req, res)=>{
    try {
        const data = new MensRanking(req.body)
        await data.save().then(()=>res.status(200).json({message:"Instance creation success"}))
    } catch (error) {
        res.status(500).json({error,message:"Instance creation failed"})
    }
}

const getMens = async (req, res)=>{
    try {
        const result = await MensRanking.find({}).sort({ranking:1})
        res.status(200).send(result)
    } catch (error) {
        res.status(404).json({error, Message:"Failed to retrive data"})
    }
}

export {createMens, getMens}