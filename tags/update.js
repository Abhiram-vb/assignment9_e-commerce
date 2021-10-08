const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const tagSchema = require('./schema')

const updateTagDetails = async(_id)=>{
    try{
        const result = await tagSchema.updateOne({_id},{$set:{name:"Note Book"}},{useFindAndModify:false})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
updateTagDetails("615fc531694afcf69cb593a6")