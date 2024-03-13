import bcrypt from 'bcryptjs'
import User from '../models/User.js'
import { generateToken,codeForEmail } from '../utils.js';

export const signup=async(req,res)=>{
    const{name,email,password}=req.body;

    const newUser= new User({
        name:name,
        email:email,
        password:bcrypt.hashSync(password),
    });

    const user=await newUser.save();

    res.send({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:generateToken(user),
    });
};
export const signin=async(req,res)=>{
    const{password:passwordFromWebsite,email}=req.body;

    const user=await User.findOne({email:email});
    if(user){
        if(bcrypt.compareSync(passwordFromWebsite,user.password)){
            res.send({
                _id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({message:"invalid password/user"});
}
export const resetPass=async(req,res)=>{
    const{email}=req.body;
    const user=await User.findOne({email:email});
    if(user){
        const num=Math.floor(Math.random() * (999999 - 100000) + 100000);
        user.codeForReset=num;
        await user.save();
        await codeForEmail(email,num);
        res.send({message:"send code to your mail"})
        return;
    }
    res.status(401).send({message:"the email is not exist"});
}
export const verifyCode=async(req,res)=>{
    const{email,code}=req.body;
    const user=await User.findOne({email:email});
    if(user){
        if(user.codeForReset===code){
            res.send({message:"succseed"})
            
        }else{
            res.send({message:"the code is wrong"});
        }
        return;
    }
    res.status(401).send({message:"the email is not exist"});
}
export const changePass=async(req,res)=>{
    const{email,password}=req.body;
    const pass=bcrypt.hashSync(password)
    const user=await User.findOne({email:email});
    if(user){
        user.password=pass;
        user.codeForReset=null
        await user.save();
        res.send({message:"the password changed"});
        return;
    }
    res.status(401).send({message:"the email is not exist"});
}