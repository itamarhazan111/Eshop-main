import axios from 'axios';
import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Title from '../components/Title';
import {  Form ,Button} from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Cookies from 'js-cookie';



function ResetPage() {
    const navigate=useNavigate();

    const [ email, setEmail ] = useState("");

    const submitHandler=async(e)=>{

        try{
            e.preventDefault();
            const {data}=await axios.put("/api/v1/users/reset",{email});
            //localStorage.setItem("email",email);
            Cookies.set('email', email);
            navigate("/verify");
        }catch(err){
            toast.error(getError(err));
        }
    }
  return (
        <Container className='small-container'>
            <Title title={"Reset"}/>
            <h1 className='my-3'>send code to your email</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3'>
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control type='email' required onChange={(e)=>setEmail(e.target.value)} placeholder="example@example.com"></Form.Control>
                </Form.Group>
                <div className='mb-3'>
                    <Button type='submit'>Send</Button>
                </div>
            </Form>
        </Container>
  )
}

export default ResetPage