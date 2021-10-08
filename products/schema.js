const mongoose = require("mongoose")
const Schema = mongoose.Schema
const productSchema = new Schema({
    name:{
        type:String,
        uppercase:true
    },
    thumbnail:String,
    product_gallery:Array,
    description:String,
    base_price:Number,
    sell_price:Number,
    category_name:String,
    tags:Array,
    additional_information:String
})

module.exports = mongoose.model("Product",productSchema)