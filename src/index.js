const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://Shwetadubey:QvtqJ8hdhmn0fhlT@cluster0.ymyddly.mongodb.net/studentResult'
,{useNewUrlParser: true})


.then(() => console.log('MongoDB is connected'))
.catch(err => console.log(err))


app.use('/', route)

app.listen( 3000, function(){
    console.log('Express app running on port ' + (3000))
})