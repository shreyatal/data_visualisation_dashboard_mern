const express=require('express')
const cors = require('cors');
const dbConnect=require('./mongodb')
const app=express();

app.use(cors());
app.get('/getData',async(req,resp)=>{
   let data=await dbConnect();
    data=await data.find().toArray();
    resp.send(data)
});

app.listen(5000)