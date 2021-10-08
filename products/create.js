const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const productSchema = require("./schema")
const insertOneData = async ()=>{
    try{
        const product1 = new productSchema({
            name:"Nike flyknit air max",
            thumbnail:"Mens Running Shoes",
            product_gallery:["https://image1","https://image2"],
            description:"Nike running experts can assist with gear tips",
            base_price:1500,
            sell_price:1200,
            category_name:"Shoes",
            tags:['men',"Shoes","Running"],
            additional_information:"Join nike for free shipping on every order"
        })
        const result = await product1.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
// insertOneData()
const insertManyData = async ()=>{
    try{
        const product1 = new productSchema({
            name:"College Essentials",
            thumbnail:" Exploration designed by Justin Reyna for handsome",
            product_gallery:["https://image1","https://image2"],
            description:"Connect with them on Dribbble; the global community for designers and creative professionals.",
            base_price:2200,
            sell_price:1800,
            category_name:"college",
            tags:["Ux","DesignPage" ,"DesignGraphic" ,"DesignDesign" ,"Elements"],
            additional_information:"Product Detail Page | Exploration"
        })
        const product2 = new productSchema({
            name:"Screenlane",
            thumbnail:"Women Running Shoes",
            product_gallery:["https://image1","https://image2"],
            description:"Get inspired and keep up with the latest web & mobile app UI design trends",
            base_price:5000,
            sell_price:3500,
            category_name:"Shoes",
            tags:['Women',"Shoes","Running"],
            additional_information:"Join Screenlane for free shipping on every order"
        })
        const product3 = new productSchema({
            name:"upholstered sofa",
            thumbnail:"Kyara upholstered standard bed by zipcode design",
            product_gallery:["https://image1","https://image2"],
            description:"Anchor your living room in sophisticated style and impeccable comfort with a single addition. Perfectly balanced wood accets with fabric.",
            base_price:30000,
            sell_price:27000,
            category_name:"Sofa",
            tags:['Sofa',"furniture","living-room"],
            additional_information:"Secure payment fast delivery"
        })
        const result = await productSchema.insertMany([product1,product2,product3])
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
// mongoose.connection.close()