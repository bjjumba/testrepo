const express =require('express')
const app =express()

app.get('/',(req,res)=>{
  res.send(<h1>HHello world</h1>)
           }
 app.listen(3000,()=>console.log('Server Listening at Point 3000')
