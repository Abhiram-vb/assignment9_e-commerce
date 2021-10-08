const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const userSchema = require('./schema')

const deleteUserDetails = async(_id) =>{
    try{
        console.log(userSchema)
        const result = await userSchema.findByIdAndDelete({_id})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
deleteUserDetails("615ef585fe2d939ef800fa05")