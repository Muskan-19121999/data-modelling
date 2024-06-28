import mongoose from "mongoose"

const toDoSchema = new mongoose.Schema({
 content:{
    type:String,
    required:true,   
 },
 complete:{
    type:Boolean,
    default:false
 },
 createdBy:{
    type:mongoose.Schema.Types.ObjectId, //object id type to get reference from any other model
    ref : "User",
 },
 subTodos:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subtodo"
    } // array of subbtodos
 ]
},{timestamps:true})

export const ToDo = mongoose.model("Todo",toDoSchema)