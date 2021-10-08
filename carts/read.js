const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const cartSchema = require("./schema")
const readAllData = async() =>{
    try{
        const result = await cartSchema.find()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readAllData()

const readByQueryData = async() =>{
    try{
        const result = await cartSchema.find({total_price:14000})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByQueryData()

const readByLimitData = async() =>{
    try{
        const result = await cartSchema.find().limit(2)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByLimitData()


const readBySelectData = async() =>{
    try{
        const result = await cartSchema.find({product:"Mouse"}).select({product_quantity:1})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readBySelectData()

const readByComparisionData = async() =>{
    try{
        const result = await cartSchema.find({users_id:["A1546","A1346"]})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
readByComparisionData()
