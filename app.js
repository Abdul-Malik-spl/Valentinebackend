let express=require('express')
let path=require('path')
let configenv=require('dotenv')
let app=express()
configenv.config({path:path.join(__dirname,"config.env")})


app.use('/',(req,res)=>{
    res.send('success')
})

app.listen(process.env.PORT,()=>{
    console.log("server start successfully")
})