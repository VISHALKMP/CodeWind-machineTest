// import joi from 'joi';
import { ExpressValidator, validationResult } from "express-validator";
import {body} from 'express-validator'
export const auth = async(req,res,next)=>{
    try {
       
        // body("name")
        // .isString()
        // .notEmpty()
        // .withMessage("Required name in String"),

      await body("email")
        .isEmail()
        .withMessage("email should be correct")
        .run(req),

       await body("password")
        .isLength({min:2 , max:7})
        .withMessage("password should be between 6 to 7")
        .run(req)
        const error = validationResult(req) ;
        if(!error.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }

   next();
        
        
    } catch (error) {
     console.log("internal error",error.message);
     return res.status(501).json({error:"internal server error"})
        
    }
}

export const authh = async(req,res,next)=>{
    try {
       
       await body("name")
        .isString()
        .notEmpty()
        .withMessage("Required name in String")
        .run(req),

      await  body("email")
        .isEmail()
        .withMessage("email should be correct")
        .run(req),

       await body("password")
        .isLength({min:6 , max:7})
        .withMessage("password should be between 6 to 7")
        .run(req)

        const error = validationResult(req) ;
        if(!error.isEmpty()){
            return res.status(400).json({error:error})
        }
        next();
        
    } catch (error) {
     console.log("internal error",error.message);
     return res.status(501).json({error:"internal server error",error})
        
    }
}