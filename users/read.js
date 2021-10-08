const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const userSchema = require("./schema")
const readAllData = async() =>{
    try{
        const result = await userSchema.find()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readAllData()

const readByQueryData = async() =>{
    try{
        const result = await userSchema.find({first_name:"Hemalatha"})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByQueryData()

const readByLimitData = async() =>{
    try{
        const result = await userSchema.find().limit(2)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByLimitData()


const readBySelectData = async() =>{
    try{
        const result = await userSchema.find().select({first_name:1})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readBySelectData()

const readByComparisionData = async() =>{
    try{
        const result = await userSchema.find({first_name:["Abhiram","Hemalatha"]}).select({first_name:1})
        console.log(result,"Abhiram")
    }
    catch(err){
        console.log(err)
    }
}
readByComparisionData()

const readByOrData = async()=>{
    try{
        const result = await userSchema.find({$or:[{first_name:"Abhiram"},{last_name:"Kumar"}]})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByOrData()