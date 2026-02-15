let jwt=require('jsonwebtoken')

let authentication=(req,res,next)=>{
    try{
    let authHeader=req.headers.authorization
    if(!authHeader){
        return res.status(401).json({message:"token unavailable",status:401})
    }
    let token=authHeader.split(" ")[1]

    let decode=jwt.verify(token,process.env.MY_SECRET)
    req.user=decode
    next()}
    catch(e){
return res.status(401).json({
    message:"invalid or expired token",status:401
})
    }
}
module.exports=authentication