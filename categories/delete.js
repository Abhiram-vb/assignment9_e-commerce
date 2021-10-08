const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const categorySchema = require('./schema')

const deleteCategoryDetails = async(_id) =>{
    try{
        console.log(categorySchema)
        const result = await categorySchema.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
deleteCategoryDetails("615fd49302790535654c12f2")