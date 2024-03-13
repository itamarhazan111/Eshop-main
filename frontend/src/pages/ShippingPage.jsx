import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../Store';
import CheckOutSteps from '../components/Shared/CheckOutSteps.jsx';
import Title from '../components/Title.jsx';
import { Button, Container, Form } from 'react-bootstrap';
import { SHIPPING_ADDRESS } from '../Actions.jsx';

const ShippingPage=()=> {
    const navigate=useNavigate();
    const{state,dispatch:ctxDispatch}=useContext(Store);
    const {userInfo ,cart:cartItems}=state;
 useEffect(()=>{
    if(cartItems.length===0){
        navigate('/')
    }
    if(!userInfo){
        navigate("/signin?redirect=/shipping")
    }
 },[cartItems.length,navigate,userInfo])
 const submitHandler=(e)=>{
  e.preventDefault();
  const formData=new FormData(e.currentTarget);
  const data=Object.fromEntries(formData);
  ctxDispatch({type:SHIPPING_ADDRESS ,payload:data});
  navigate("/payment")

 }
  return (
    <div>
      <Title title="Shipping"/>
        <CheckOutSteps step1 step2/>
        <Container className='small-container'>
          <h1>Shipping Address</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className='mb-3'>
              <Form.Label>Full Name:</Form.Label>
              <Form.Control name="fullName" required></Form.Control>
              <Form.Label>Address:</Form.Label>
              <Form.Control name="address" required></Form.Control>
              <Form.Label>City:</Form.Label>
              <Form.Control name="city" required></Form.Control>
              <Form.Label>Postal Code:</Form.Label>
              <Form.Control name="postalCode" required></Form.Control>
              <Form.Label>Country:</Form.Label>
              <Form.Control name="country" required></Form.Control>
            </Form.Group>
            <div className='mb-3'>
              <Button variant="primary" type='submit'>submit</Button>
            </div>
          </Form>
        </Container>

    </div>
  )
}

export default ShippingPage