const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-commerce").then(()=>console.log("connection Succesfull....  ")).catch((err)=>console.log(err))
const roleSchema = require("./schema")
const insertOneData = async ()=>{
    try{
        const role1 = new roleSchema
    ({
            name:"Software Engineer",
            slug:"software-engineer"
        })
        const result = await role1.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}
insertOneData()
const insertManyData = async ()=>{
    try{
        const role2 = new roleSchema
    ({
            name:"Software Developer",
            slug:"software-developer"
        })
        const role3 = new roleSchema
    ({
            name:"Software Testing",
            slug:"software-testing"
        })
        const role4 = new roleSchema
    ({
            name:"Full Stack Developer",
            slug:"full-stack-developer"
        })
        const result = await roleSchema
    .insertMany([role2,role3,role4])
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