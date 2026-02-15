let path=require('path')
let bcrypt=require('bcrypt')
let jwt=require('jsonwebtoken')
let userModel=require(path.join(__dirName,'..','Models','user.js'))

exports.signup=async(req,res)=>{
    try{
let {name,email,partnerName,partnerEmail,password}=req.body

if(!name||!email||!partnerName||!partnerEmail||!password){
return res.status(400).json({messaage:"give all details",status:400})

}
let userFound=await userModel.findOne({email})
if(userFound){
return res.status(409).json({message:"user already there",status:409})
}
let hashpassword=await bcrypt.hash(10,password)
let data={userName:name,userEmail:email,partnerName:partnerName,partnerMail:partnerEmail,password:hashpassword}
let userDetail=new userModel(data)
await userDetail.save()
res.status(201).json({message:"user Create successfully",status:201})
    }catch(e){
     res.status(500).json({message:"server stoped",status:500})
    }
}

exports.login=async(req,res)=>{
    try{
    let {userMail,password}=req.body

    if(!userMail||password){
        return res.status(400).json({message:"give all username and password",status:400})
    }
    let userFound=await userModel.findOne({userMail})

    if(!userFound){
        return res.status(404).json({message:"user Not Found",status:404})
    }
let isMatch=await bcrypt.compare(password,userFound.password)
    if(!isMatch){
        return res.status(401).json({message:"password is incorrect",status:401})
    }
let payload={id:userFound._id}
let skey=process.env.MY_KEY
let token=jwt.sign(payload,skey,{expiresIn:"7d"})
    res.status(200).json({message:"login successfull",status:200,token})

}catch(e){
res.status(500).json({
    message:"server stoped",status:500
})
}
}

exports.dashboard=async(req,res)=>{
    try{
let userFound=await userModel.findById(req.user.id)
if(!userFound){
    return res.status(404).json({
        message:"user Not Found",
        status:404
    })
}

res.status(200).json({message:"dashboard fetched successfully",user:userFound})
    }catch(e){
        return res.status(500).json({message:"server not connect",status:500})
    }
}
