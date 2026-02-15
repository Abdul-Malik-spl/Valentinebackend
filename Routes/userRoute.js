let express=require('express')
let path=require('path')
let UserRoute=express.Router()
let authentication=require(path.join(__dirName,'..','middleware','authMiddleware.js'))
let {signup,login,dashboard}=require(path.join(__dirName,'..','Controlls','userController.js'))

UserRoute.post('/signup',signup)
userRoute.post('/login',login)
userRoute.get('/dashboard',authentication,dashboard)

module.exports=userRoute