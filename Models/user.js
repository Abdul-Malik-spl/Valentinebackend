let mongoose=require('mongoose')

let userSchema=mongoose.Schema({
    userName:{type:String,required:true},
    userMail:{type:String,required:true,unique:true},
    partnerName:{type:String},
    partnerMail:{type:String},
    partnerId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    password:{type:String,required:true}
},{timestamps:true});
let SignModel=mongoose.model('User',signScheema)

module.exports=SignModel