const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const orderSchema = require("./schema")
const insertOneData = async ()=>{
    try{
        const order1 = new orderSchema
    ({
        users_id:"A123",
        total_items:3,
        products:["SmartPhone","ClassMate Book","Watch"],
        billing_address:"langerHouz near mehidipatnam huderabad",
        shipping_address:"house no 123, kodad telangana ",
        transaction_status:"Success",
        payment_mode:"Upi",
        payment_status:"Done",
        order_status:"Recieved"
        })
        const result = await order1.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertOneData()
const insertManyData = async ()=>{
    try{
        const order2 = new orderSchema
    ({
        users_id:"A1546",
        total_items:1,
        products:["Mouse"],
        billing_address:"Secundrabad near railway station",
        shipping_address:"vijayawada near dura matha temple",
        transaction_status:"Pending",
        payment_mode:"Cod",
        payment_status:"Waiting",
        order_status:"Dispatch"
        })
        const order3 = new orderSchema
    ({
        users_id:"A1345",
        total_items:1,
        products:["Air pods"],
        billing_address:"Bangalore",
        shipping_address:"Hyderabad",
        transaction_status:"Failed",
        payment_mode:"Card",
        payment_status:"Rejected",
        order_status:"In Transit"
        })
        const order4 = new orderSchema
    ({
        users_id:"H189",
        total_items:2,
        products:["REDMI Mobile","Fast Charger"],
        billing_address:"Delhi",
        shipping_address:"Bophal",
        transaction_status:"Success",
        payment_mode:"Cod",
        payment_status:"Done",
        order_status:"Recieved"
        })
        const result = await orderSchema
    .insertMany([order2,order3,order4])
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
