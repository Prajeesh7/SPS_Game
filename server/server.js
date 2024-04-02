const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get("/api",(req,res)=>{
    res.json({"Colors": ["red","black","yellow"]});
})

app.listen(4000,()=> console.log("server running successfully"));