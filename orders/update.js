const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const orderSchema = require('./schema')

const updateOrderDetails = async(_id)=>{
    try{
        const result = await orderSchema.updateOne({_id},{$set:{order_status:"Recieved",payment_status:"Done",transaction_status:"Success"}},{useFindAndModify:false})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
updateOrderDetails("615fcd11a3727572c32b7c05")