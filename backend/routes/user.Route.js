import express from 'express';
const route = express.Router();
import { SignUp, SignIn} from '../controller/user.Controller.js';
import {auth,authh} from '../middleware/user.middle.js'


route.post("/signUp",authh,SignUp);
route.post("/singIn",auth,SignIn)

export default route;