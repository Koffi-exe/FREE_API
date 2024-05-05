import express from 'express'
import 'dotenv/config'
import { connectdb } from './db/connection.js';
import MensRanking from './models/mens100.models.js';
import raceRouter from './routes/mens.routes.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json())


app.use('/race', raceRouter)

app.listen(port, () => {
    console.log("Server Listening at port:", port)
    connectdb();
})