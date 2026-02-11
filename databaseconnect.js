let mongoose=require('mongoose')

function databaseconnect(){
    mongoose.connect(process.env.MONGO_URL).then((res)=>{
        console.log("successfully Database Connect",res.connection.host)
    }).catch((e)=>{
        console.log("database not connect")
    })
}

module.exports=databaseconnect