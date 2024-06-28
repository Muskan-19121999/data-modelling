import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Category = mongoose.model("Category",categorySchema)

/*If we give the model name as categories , then also the mongo model name in db will e saved as categories */