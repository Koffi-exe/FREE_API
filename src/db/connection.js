import mongoose from "mongoose";

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