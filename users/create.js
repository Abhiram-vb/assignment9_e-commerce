const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const userSchema = require("./schema")
const insertOneData = async ()=>{
    try{
        const user1 = new userSchema({
            first_name:"Abhiram",
            last_name:"Paidimarri",
            email:"abhiram.p@vb.com",
            profile_image:"https://abhiram",
            role:"Software Engineer"
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
        const user1 = new userSchema({
            first_name:"Divanshu",
            last_name:"Kumar",
            email:"divanshu.k@vb.com",
            profile_image:"https://divanshu",
            role:"Software Engineer"
        })
        const user2 = new userSchema({
            first_name:"Hemalatha",
            last_name:"S",
            email:"hemalatha.s@vb.com",
            profile_image:"https://hema",
            role:"Software Engineer"
        })
        const user3 = new userSchema({
            first_name:"Thanuja",
            last_name:"A",
            email:"thanula.a@vb.com",
            profile_image:"https://thanuja",
            role:"Software Engineer"
        })
        const result = await userSchema.insertMany([user1,user2,user3])
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertManyData()
// mongoose.connection.close()