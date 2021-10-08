const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const productSchema = require('./schema')

const deleteProductDetails = async(_id) =>{
    try{
        console.log(productSchema)
        const result = await productSchema.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
deleteProductDetails("615fc1a2b63fff055ba200b7")