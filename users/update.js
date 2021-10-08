const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const userSchema = require('./schema')

const updateUserDetails = async(_id)=>{
    try{
        const result = await userSchema.updateOne({_id},{$set:{last_name:"Aalavala"}},{useFindAndModify:false})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
updateUserDetails("615ef585fe2d939ef800fa05")