import axios from 'axios';
import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Title from '../components/Title';
import { Button, Form } from 'react-bootstrap';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Cookies from 'js-cookie';
import { Store } from '../Store.jsx';
import {USER_SIGNIN} from '../Actions.jsx'


function SignUp() {
    const navigate=useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const userInfo=state;
    const {search}=useLocation();
    const redirectUrl=new URLSearchParams(search);
    const redirectValue=redirectUrl.get("redirect");
    const redirect=redirectValue?redirectValue:'/';
    useEffect(() => {


            if(userInfo){
                navigate(redirect)
            }
        
    }, [navigate,redirect,userInfo]);

    const {dispatch} = useContext(Store);
    const submitHandler=async(e)=>{
    try{
        e.preventDefault();
        if(name.length<3){
                toast.error("name must be +3 letters");
        }
        else if(password===confirmPassword){
        const {data}=await axios.post("/api/v1/users/signup",{email,password,name});
        dispatch({type:USER_SIGNIN,payload:data})
        Cookies.set('userInfo', JSON.stringify(data));
        //localStorage.setItem("userInfo",JSON.stringify(data));
        navigate(redirect);
        }else{
            toast.error("the password not equals");
        }
    }catch(err){
        toast.error(getError(err));
    }
}
  return (
    <Container className='small-container'>
            <Title title={"SignIn"}/>
            <h1 className='my-3'>Sign In</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3'>
                    <Form.Label>
                        Name:
                    </Form.Label>
                    <Form.Control required onChange={(e)=>setName(e.target.value)} placeholder="name"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control type='email' required onChange={(e)=>setEmail(e.target.value)} placeholder="example@example.com"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control type='password' required onChange={(e)=>setPassword(e.target.value)} placeholder="password"></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        Confirm Password:
                    </Form.Label>
                    <Form.Control type='password' required onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="confirm password"></Form.Control>
                </Form.Group>
                <div className='mb-3'>
                    <Button type='submit'>Sign In</Button>
                </div>
                <div className='mb-3'>
                    Already have an acount?{" "}
                    <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                </div>
            </Form>
        </Container>
  )
    
}

export default SignUp