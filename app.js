const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI}= require('./keys')

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))

mongoose.connect("mongodb+srv://majokavikas:vikasmajoka@cluster0.fh63oeu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeah")
})

mongoose.connection.on('error',(err)=>{
    console.log("err connecting" ,err)
})
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})