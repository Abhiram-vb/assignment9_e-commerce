const mongoose = require("mongoose")
const Schema = mongoose.Schema
const tagSchema = new Schema({
    name:String,
    slug:String
})

module.exports = mongoose.model("Tag",tagSchema)