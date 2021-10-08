const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const tagSchema = require('./schema')

const deleteTagDetails = async(_id) =>{
    try{
        console.log(tagSchema)
        const result = await tagSchema.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
deleteTagDetails("615fc531694afcf69cb593a5")