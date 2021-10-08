const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema({
    first_name:String,
    last_name:String,
    email:String,
    profile_image:String,
    role:String,
})

module.exports = mongoose.model("User",userSchema)