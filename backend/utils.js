import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import dotenv from "dotenv";

export const generateToken=(_id,name,email)=>{
    return jwt.sign({_id:_id,name:name,email:email},process.env.JWT_PW,{expiresIn:'7d'})
}

export const codeForEmail=async(email,num)=>{
    dotenv.config();
    const host=process.env.EmailHost.toString();
    const user=process.env.EmailUserName.toString();
    const pass=process.env.EmailPassword.toString();
    const text=num.toString();
    const transport=nodemailer.createTransport({
        service:'Gmail',
        secure: false,
        auth:{
            user:user,
            pass:pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const mail={
        from:user,
        to:email,
        subject:"code for password",
        text:text
    }
    transport.sendMail(mail,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log("s")
        }
    })
}

export const isAuth=(req,res,next)=>{
    const auth=req.headers.authorization;
    if(auth){
        const token=req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.JWT_PW,(err,decode)=>{
            if(err)res.status(401).send({message:err.message});
            else{
                req.user=decode;
                next();
            }

        })

    }else{
        res.status(401).send({message:"No token"})
    }
}