const mongoose = require("mongoose")
const Schema = mongoose.Schema
const orderSchema = new Schema({
    users_id:String,
    total_items:Number,
    products:Array,
    billing_address:String,
    shipping_address:String,
    transaction_status:{
        type:String,
        enum:["Success","Pending","Failed"],
    },
    payment_mode:{
        type:String,
        enum:["Upi","Card","Cod"],
    },
    payment_status:{
        type:String,
        enum:["Done","Rejected","Waiting"],
    },
    order_status:{
        type:String,
        enum:["In Transit","Dispatch","Recieved"]
    }
})

module.exports = mongoose.model("Order",orderSchema)