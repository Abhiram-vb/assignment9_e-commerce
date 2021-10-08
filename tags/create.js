const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const tagSchema = require("./schema")
const insertOneData = async ()=>{
    try{
        const tag1 = new tagSchema({
            name:"SmartPhone",
            slug:"smart-phone"
        })
        const result = await tag1.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertOneData()
const insertManyData = async ()=>{
    try{
        const tag1 = new tagSchema({
            name:"Book",
            slug:"avengers-classmate-book"
        })
        const tag2 = new tagSchema({
            name:"Mouse Logitech",
            slug:"logitech-mouse-wireless"
        })
        const tag3 = new tagSchema({
            name:"PowerBank OnePlus",
            slug:"oneplus-powerbank"
        })
        const result = await tagSchema.insertMany([tag1,tag2,tag3])
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertManyData()
// mongoose.connection.close()