let express=require('express')
let path=require('path')
let configenv=require('dotenv')
let cors=require('cors')
let app=express()
let userRoute=require(path.join(__dirName,"Routes","userRoute.js"))
configenv.config({path:path.join(__dirname,"config.env")})

app.use(corse())
app.use('/api',userRoute)

let PORT=process.env.PORT||2002
app.listen(PORT,()=>{
    console.log("server start successfully")
})

/*
/api/signup
/api/login
/api/dashboard

*/  