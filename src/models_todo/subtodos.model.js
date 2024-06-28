import mongoose from "mongoose"

/*subtodo model will related to todomodel */

const SubToDoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Subtodo = mongoose.model("Subtodo",SubToDoSchema)