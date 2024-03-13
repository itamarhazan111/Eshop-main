import axios from 'axios';
import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Title from '../components/Title';
import {  Form ,Button} from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Cookies from 'js-cookie';

function VerifyPage() {
    const navigate=useNavigate();

    const email=Cookies.get('email')?(Cookies.get('email')):null;
    const [ code, setCode ] = useState("");

    const submitHandler=async(e)=>{
        console.log(email)
        try{
            e.preventDefault(); 
            const {data}=await axios.post("/api/v1/users/verify",{email:email,code:code});
            if(data.message==="succseed")
                navigate("/change");
            else{
                toast.error(data.message);
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
                        code:
                    </Form.Label>
                    <Form.Control required onChange={(e)=>setCode(e.target.value)} placeholder="code"></Form.Control>
                </Form.Group>
                <div className='mb-3'>
                    <Button type='submit'>Send</Button>
                </div>
            </Form>
        </Container>
  )
}


export default VerifyPage