const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const roleSchema = require('./schema')

const deleteUserDetails = async(_id) =>{
    try{
        console.log(roleSchema)
        const result = await roleSchema.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
deleteUserDetails("615fad1f9d692f20f07a2ea5")