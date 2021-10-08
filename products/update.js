const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const productSchema = require('./schema')

const updateProudctDetails = async(_id)=>{
    try{
        const result = await productSchema.updateOne({_id},{$set:{category_name:"Furniture"}},{useFindAndModify:false})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
updateProudctDetails("615fc1a2b63fff055ba200b8")