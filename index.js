const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3000
























































app.listen(PORT,()=> {
    console.log(`server running on port ${PORT}`)
})

app.get('/',(request,response)=>{
    response.send('Hello Eru')
})