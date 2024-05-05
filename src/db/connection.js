import mongoose from "mongoose";
import 'dotenv/config'

async function connectdb(){
    await mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Database connected!")
    })
    .catch(()=>{
        console.log("Connection to database failed")
    })
}

export {connectdb}