import mongoose from "mongoose";

const mensSchema = new mongoose.Schema({
    event: {
        type: String,
        default:"100m"
    },
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    DOB: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true,
        trim:true
    },
    score:{
        type:Number,
        required:true
    }
})

const MensRanking = mongoose.model("MensRanking", mensSchema);

export default MensRanking;
