const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const cartSchema = require("./schema")
const insertOneData = async ()=>{
    try{
        const user1 = new cartSchema({
            product:"SmartPhone",
            user_id:"A123",
            product_quantity:1,
            base_price:15000,
            sell_price:14000,
            total_price:14000
        })
        const result = await user1.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertOneData()
const insertManyData = async ()=>{
    try{
        const user1 = new cartSchema({
            product:"Mouse",
            user_id:"A2345",
            product_quantity:3,
            base_price:1000,
            sell_price:800,
            total_price:2400
        })
        const user2 = new cartSchema({
            product:"Air Pods",
            user_id:"C456",
            product_quantity:2,
            base_price:5000,
            sell_price:4500,
            total_price:9000
        })
        const user3 = new cartSchema({
            product:"Class Mate Book",
            user_id:"A1254",
            product_quantity:10,
            base_price:95,
            sell_price:50,
            total_price:500
        })
        const result = await cartSchema.insertMany([user1,user2,user3])
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close()
    }
}
insertManyData()