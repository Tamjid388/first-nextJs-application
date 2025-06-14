import mongoose, { Schema } from "mongoose";


const userSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"Plese Provide A username"],
            unique:true
        },
        email:{
            type:String,
            required:[true,"Plese Provide A email"],
            unique:true
        },
        password:{
            type:String,
            required:[true,"Please Provide a Password"]
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        forgotPasswordToken:String,
        forgotPasswordTokenExpiry:Date,
        verifyToken:String,

    }
)
const User=mongoose.models.users || mongoose.model("users",userSchema)


export default User