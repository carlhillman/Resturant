
//to create a express server
const express = require('express')
const app = express()
//const mssql = require('mssql')

const dbOperations = require('./dbOperations')

dbOperations.getDishes().then(res =>{
console.log(res)
}
)

app.get("/", (req, res) =>{
    res.send("wow");
    })

app.listen(3001, ()=>{
    console.log('running on port 3001')
})
