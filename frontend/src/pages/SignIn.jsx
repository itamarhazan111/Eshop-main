import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Title from '../components/Title';
import { Button, Form } from 'react-bootstrap';
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Cookies from 'js-cookie';
import { Store } from '../Store.jsx';
import {USER_SIGNIN} from '../Actions.jsx'


function SignIn() {
    const navigate=useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const {state,dispatch} = useContext(Store);
    const {userInfo}=state;
    const {search}=useLocation();
    const redirectUrl=new URLSearchParams(search);
    const redirectValue=redirectUrl.get("redirect");
    const redirect=redirectValue?redirectValue:'/';
    useEffect(() => {
            if(userInfo){
                navigate(redirect)
            }
       
    }, [navigate,redirect,userInfo]);

    const submitHandler=async(e)=>{

        try{
            e.preventDefault();
            const {data}=await axios.post("/api/v1/users/signin",{email,password});
            dispatch({type:USER_SIGNIN,payload:data})
            Cookies.set('userInfo', JSON.stringify(data));
            //localStorage.setItem("userInfo",JSON.stringify(data));
            navigate(redirect);
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
                <div className='mb-3'>
                    <Button type='submit'>Sign In</Button>
                </div>
                <div className='mb-3'>
                    New custumer?{" "}
                    <Link to={`/signip?redirect=${redirect}`}>Create your account</Link>
                </div>
                <div className='mb-3'>
                    Forget your password?{" "}
                    <Link to="/reset">Reset password</Link>
                </div>
            </Form>
        </Container>
  )
}

export default SignIn