import { User } from "../model/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
export const SignUp = async(req,res,next)=>{
    try{
      let {email,name,password} =req.body;
      let existingUser = await User.findOne({email});

      if(existingUser){
        console.log("user Already exists");
        return res.status(401).json({error:"User Already Exists"});
      }

      let Saltkey = bcrypt.genSaltSync(10);
      password = bcrypt.hashSync(req.body.password,Saltkey);
 
      let result = new User({
        email,name,password
      })
      await result.save();

      return res.status(201).json({message:"SignUp Sucsess"})

    }
    catch(err){
        console.log(err);
        return  res.status(501).json({error:"Internal Server Error"})
        
    }
}

export const SignIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
  
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const token = jwt.sign( { email:email,password:password} ,process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
  
      return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          email: user.email,
          name: user.Name,
        },
      });
    } catch (err) {
      console.log(err);
      return res.status(501).json({ error: "Internal Server Error" });
    }
  };
  