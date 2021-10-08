const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const categorySchema = require("./schema")
const insertOneData = async ()=>{
    try{
        const category1 = new categorySchema({
            name:"SmartPhone",
            slug:"smart-phone",
            image:"https://image1",
            description:"Best discount ever"
        })
        const result = await category1.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertOneData()
const insertManyData = async ()=>{
    try{
        const category1 = new categorySchema({
            name:"Indra K. Nooyi",
            slug:"indra-k-nooyi",
            image:"https://indra-k-nooyi-book",
            description:"My Life in Full: Work, Family, and Our Future (With a special Epilogue for India)My Life in Full: Work, Family, and Our Future (With a special Epilogue for India)Indra K. Nooyi"
        })
        const category2 = new categorySchema({
            name:"Mouse Logitech",
            slug:"logitech-mouse-wireless",
            image:"https://logitech-mouse-wireless",
            description:"Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black"
        })
        const category3 = new categorySchema({
            name:"PowerBank OnePlus",
            slug:"oneplus-powerbank",
            image:"https://oneplus-powerbank",
            description:"OnePlus 10000 mAh Power Bank (Fast PD Charging, 18 W) (Black, Lithium Polymer)"
        })
        const result = await categorySchema.insertMany([category1,category2,category3])
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertManyData()
// mongoose.connection.close()