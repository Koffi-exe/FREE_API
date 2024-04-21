import express from 'express'
import 'dotenv/config'
import { connectdb } from './db/connection.js';
import MensRanking from './db/models/mens100.models.js';


const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())

app.post('/mens', async (req, res) => {
    try {
        const rank = new MensRanking(req.body)
        rank.save()
            .then(() => {
                console.log("Data saved in dataBaase")
                res.status(201).send(rank)
            })
            .catch((e) => {
                console.log("Data not saved in dataBase")
                res.status(400).send(e)
            })
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/mens', async (req, res) => {
    try {
        const result = await MensRanking.find({}).sort({ranking:1});
        res.send(result);
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findOne({ _id });
        res.send(getMen);
    } catch (e) {
        res.status(400).send(e)
    }
})

app.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        await MensRanking.findOneAndUpdate({_id}, req.body).then(()=>{res.status(200).send("success")})
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/', (req, res) => {
    res.send("Message from /")
})


app.listen(port, () => {
    console.log("Server Listening at port:", port)
    connectdb();
})