import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    itemCount:{
        type:Number,
        required:true
    }
})
const orderSchema = new mongoose.Schema({
    orderValue: {
        type: Number,
        required: true
    },
    orderCreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['Pending','Cancelled','Delievered'],
        default:'Pending'
    }
}, { timestamps: true })

export const Order = mongoose.model("Order", orderSchema)