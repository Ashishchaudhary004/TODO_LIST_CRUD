const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const todomodel=require('./models/todo.js')

const app=express()
app.use(cors())
app.use(express.json())

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get',(req,res)=>{
    todomodel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
//post req
app.post('/create', (req,res)=>{
    const task=req.body.task
    todomodel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))

})
//put req
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    todomodel.findByIdAndUpdate({_id:id}, {done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

//delete req
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    todomodel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.listen(4000, ()=>{
    console.log("Server is running at 4000");
})