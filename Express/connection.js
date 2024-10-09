import mongoose from "mongoose"

export default async function connection() {
    // console.log("asd");
    
    const db=await mongoose.connect('mongodb://127.0.0.1:27017/MALABAR')
    console.log("database connected");
    
    return db
}