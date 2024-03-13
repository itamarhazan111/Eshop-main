import express from "express";
import expressAsyncHandler from 'express-async-handler'
import { signin, signup ,resetPass, verifyCode, changePass} from "../controllers/userController.js";



const userRouter=express.Router();

userRouter.post('/signin',expressAsyncHandler(signin));
userRouter.post('/signup',expressAsyncHandler(signup));
userRouter.put('/reset',resetPass);
userRouter.post('/verify',verifyCode);
userRouter.put('/change',changePass);

export default userRouter;