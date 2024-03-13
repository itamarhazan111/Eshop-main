import axios from 'axios';
import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Title from '../components/Title';
import {  Form ,Button} from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Cookies from 'js-cookie';


function ChangePage() {
    const navigate=useNavigate();

    const email=Cookies.get('email')?(Cookies.get('email')):null;
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    const submitHandler=async(e)=>{
        console.log(email)
        try{
            e.preventDefault(); 
            if(password===confirmPassword){
                const {data}=await axios.put("/api/v1/users/change",{email:email,password:password});
                //localStorage.removeItem("email",email);
                Cookies.remove('email', email);
                navigate("/signin");
        }else{
            toast.error("the passwords is not equals")
        }
        }catch(err){
            toast.error(getError(err));
        }
    }
  return (
        <Container className='small-container'>
            <Title title={"verify"}/>
            <h1 className='my-3'>verify the code</h1>
            <Form onSubmit={submitHandler}>
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
                    <Button type='submit'>Send</Button>
                </div>
            </Form>
        </Container>
  )
}

export default ChangePage