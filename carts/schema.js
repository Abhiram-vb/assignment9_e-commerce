const mongoose = require("mongoose")
const Schema = mongoose.Schema
const cartSchema = new Schema({
    product:String,
    user_id:String,
    product_quantity:Number,
    base_price:Number,
    sell_price:Number,
    total_price:Number
})

module.exports = mongoose.model("Cart",cartSchema)