const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const cartSchema = require('./schema')

const deleteCartDetails = async(_id) =>{
    try{
        console.log(cartSchema)
        const result = await cartSchema.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
deleteCartDetails("615fd1dbf69db0ad3138a57c")