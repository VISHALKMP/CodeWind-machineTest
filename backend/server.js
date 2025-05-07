// import bodyParser, { urlencoded } from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/user.Route.js'
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config();
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors())

app.use('/user',userRoute);

mongoose.connect(`mongodb://127.0.0.1:27017/Reg`)
.then(()=>{
    console.log("conncted Successfully");
    
}).catch(err=>{
    console.log("not conncted",err);
    
})
app.listen(PORT, ()=>{
    console.log("server is Started");
    
})