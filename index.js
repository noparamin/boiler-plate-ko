//npm install express --save

const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://msk:zswtd0402@boilerplate.zgyhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

