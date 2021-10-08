const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const categorySchema = require('./schema')

const updateCategoryDetails = async(_id)=>{
    try{
        const result = await categorySchema.updateOne({_id},{$set:{name:"Smart Phone"}},{useFindAndModify:false})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
updateCategoryDetails("615fd49302790535654c12f2 ")