const mongoose = require("mongoose")
const Schema = mongoose.Schema
const categorySchema = new Schema({
    name:String,
    slug:String,
    image:String,
    description:String,
})

module.exports = mongoose.model("Category",categorySchema)