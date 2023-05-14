const express = require('express')
let CourseInfo = require("./model/courseDB")

const app = new express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

let cors = require('cors')
app.use(cors())

app.get('/',(request,response)=>{
    response.send("<h1>congratulations!</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>welcome to about page</h1>")
})

app.get('/json',(req,res)=>{
    res.json([{"name":"sahil"},{"name":"jackolypse"}])
})

app.post('/data',(req,res)=>{
    res.send(`hi ${req.body.fname} ${req.body.lname} your account is created`)
    res.status(200).end()
})

app.post('/course/create',(req,res)=>{
   let course = new CourseInfo(req.body)
   course.save()
   res.send(req.body)
})

app.get('/course/view', async (req,res)=>{
    let result = await CourseInfo.find()
    res.json(result)
})

app.post('/course/update', async (req,res)=>{
    await CourseInfo.findByIdAndUpdate(req.body._id,req.body)
    res.send("successfully updated")
})

app.post('/course/delete', async (req,res)=>{
    await CourseInfo.findByIdAndDelete(req.body._id)
    res.send("successfully deleted")
})
app.listen(5000,()=>{console.log('hi')})