const express = require('express');
const fs = require('fs')
const path = require('path')


const app = express();
//handling CORS error
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET,PUT');
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})
app.use('/', express.static(path.join(__dirname,'public')));

//handle all kind of error that sent by this app
app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message || "Server Error"
    const data = error.data || []
   res.status(status).json({
       message: message,
       data: data
   });
})

 app.listen(80, () => {
    console.log('Listening...On',80)
  })