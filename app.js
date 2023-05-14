const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const users = require("./models/users.models")
const userRouter = require("./routes//users.routes")
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// users route 
app.use("/users", userRouter)

//  home  route 
app.get("/", (req, res)=>{
     res.sendFile(__dirname + "/views/index.html")
})

// ROUTE NOT FOUND 
app.use((req, res, next)=>{
     res.status(404).json({massge :"Route Not Found"})
})



module.exports = app