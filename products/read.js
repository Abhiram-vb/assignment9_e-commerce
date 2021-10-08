const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const productSchema = require("./schema")
const readAllData = async() =>{
    try{
        const result = await productSchema.find()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readAllData()

const readByQueryData = async() =>{
    try{
        const result = await productSchema.find({name:"College Essentials"})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByQueryData()

const readByLimitData = async() =>{
    try{
        const result = await productSchema.find().limit(2)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByLimitData()


const readBySelectData = async() =>{
    try{
        const result = await productSchema.find().select({name:1})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readBySelectData()

const readByComparisionData = async() =>{
    try{
        const result = await productSchema.find({name:["College Essentials","Women Running Shoes"]}).select({name:1})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByComparisionData()

const readByOrData = async()=>{
    try{
        const result = await productSchema.find({sell_price:{$lt:5000}})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
readByOrData()