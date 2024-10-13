const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const todomodel=mongoose.model("todomodel", todoSchema)
module.exports=todomodel