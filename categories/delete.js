const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const categorySchema = require('./schema')

const deleteCategoryDetails = async(_id) =>{
    try{
        console.log(categorySchema)
        const result = await categorySchema.deleteMany({})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
deleteCategoryDetails("615fd49302790535654c12f2")