
import mongoose from "mongoose";

const UserSchema = new  mongoose.Schema({
    Name: {
        type:String
    },
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }


});

export const User = mongoose.model("User", UserSchema);