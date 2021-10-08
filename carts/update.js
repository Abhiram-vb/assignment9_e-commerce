const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const orderSchema = require('./schema')

const updateOrderDetails = async(_id)=>{
    try{
        const result = await orderSchema.updateOne({_id},{$set:{product:"Books"}},{useFindAndModify:false})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
updateOrderDetails("615fd1dbf69db0ad3138a57c")