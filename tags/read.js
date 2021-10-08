const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const tagSchema = require("./schema")
const readAllData = async() =>{
    try{
        const result = await tagSchema.find()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readAllData()

const readByQueryData = async() =>{
    try{
        const result = await tagSchema.find({name:"SmartPhone"})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByQueryData()

const readByLimitData = async() =>{
    try{
        const result = await tagSchema.find().limit(2)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByLimitData()


const readBySelectData = async() =>{
    try{
        const result = await tagSchema.find().select({slug:1})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readBySelectData()

const readByComparisionData = async() =>{
    try{
        const result = await tagSchema.find({slug:["logitech-mouse-wireless","Abcd"]}).select({name:1})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByComparisionData()

const readByOrData = async()=>{
    try{
        const result = await tagSchema.find({$or:[{name:"Mouse"},{slug:"oneplus-powerbank"}]})
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