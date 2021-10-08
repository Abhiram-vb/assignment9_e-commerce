const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const OrderSchema = require('./schema')

const deleteOrderDetails = async(_id) =>{
    try{
        console.log(OrderSchema)
        const result = await OrderSchema.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
deleteOrderDetails("615fcd11a3727572c32b7c05")