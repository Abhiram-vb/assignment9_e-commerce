const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const roleSchema = require('./schema')

const updateUserDetails = async(_id)=>{
    try{
        const result = await roleSchema.updateOne({_id},{$set:{name:"Database Engineer",slug:"database-engineer"}},{useFindAndModify:false})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
updateUserDetails("615fad1f9d692f20f07a2ea3")