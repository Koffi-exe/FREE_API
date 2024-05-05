import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { connectdb } from './db/connection.js';
import raceRouter from './routes/mens.routes.js';
import auth1Router from './routes/auth1.routes.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>res.send("This is the Merged adithya api"))

app.use('/race', raceRouter)

app.use('/auth1', auth1Router)

app.listen(port, () => {
    console.log("Server Listening at port:", port)
    connectdb();
})