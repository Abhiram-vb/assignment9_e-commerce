const mongoose = require("mongoose")
const Schema = mongoose.Schema
const roleSchema = new Schema({
    name:String,
    slug:String
})

module.exports = mongoose.model("Role",roleSchema)