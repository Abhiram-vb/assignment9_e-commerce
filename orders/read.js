const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const orderSchema = require("./schema")
const readAllData = async() =>{
    try{
        const result = await orderSchema.find()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readAllData()

const readByQueryData = async() =>{
    try{
        const result = await orderSchema.find({shipping_address:"Hyderabad"})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByQueryData()

const readByLimitData = async() =>{
    try{
        const result = await orderSchema.find().limit(2)
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByLimitData()


const readBySelectData = async() =>{
    try{
        const result = await orderSchema.find().select({products:1})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readBySelectData()

const readByComparisionData = async() =>{
    try{
        const result = await orderSchema.find({users_id:["A1546","A1346"]})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByComparisionData()

const readByOrData = async()=>{
    try{
        const result = await orderSchema.find({$or:[{billing_address:"Delhi"},{transaction_status:"Success",}]})
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
readByOrData()