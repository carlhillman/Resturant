
const express = require('express')
const app = express()

const firebaseOperations = require('./firebase-operations')

app.listen(3001, ()=>{
    console.log('running on port 3001')
});




