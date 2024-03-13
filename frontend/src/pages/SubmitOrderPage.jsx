import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../Store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Card, Col, Row } from 'react-bootstrap';
import Title from '../components/Title';
import CheckOutSteps from '../components/Shared/CheckOutSteps';
import OrderSummary from '../components/Shared/OrderSummary';
import PaymentSummary from '../components/Shared/PaymentSummary';
import axios from 'axios';
import { CLEAR_CART } from '../Actions';

function SubmitOrderPage() {
    const{state,dispatch:ctxDispatch}=useContext(Store);
    const {cart,userInfo}=state;
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        console.log(cart);
        if(!cart.paymentMethod){
            navigate("/payment");
        }       
    },[])

    const submitOrderHandler=async()=>{
        try{
            setLoading(true);
            const orderData={orderItems:cart.cartItems,
                shippingAddress:cart.shippingAddress,paymentMethod:cart.paymentMethod,
                itemsPrice:cart.itemsPrice,shippingPrice:cart.shippingPrice,taxPrice:cart.taxPrice,totalPrice:cart.totalPrice}
            const {data}=await axios.post("/api/v1/orders",orderData,{headers:{authorization:`bearer ${userInfo.token}`}})
            ctxDispatch({type:CLEAR_CART})
            localStorage.removeItem("cartItems");
            navigate(`/order/${data.order._id}`);    
        }catch(err){
            toast.error(getError(err))
        }finally{
            setLoading(false);
        }
    };
    const round2=(num)=>Math.round(num*100+Number.EPSILON)/100;

    cart.itemsPrice = round2(
        cart.cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
      );
      cart.taxPrice = round2(cart.itemsPrice * 0.17);
      cart.shippingPrice =
        cart.itemsPrice > 50
          ? round2(cart.itemsPrice * 0.1)
          : round2(cart.itemsPrice * 0.02);
      cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  return (
    <div>
        <Title title="order summary"/>
        <CheckOutSteps step1 step2 step3 step4/>
        <h1 className='my-3'>Order Summary</h1>
        <Row>
            <Col md={8}>
                <OrderSummary cart={cart} status="submitOrder" />
            </Col>
            <Col md={4} className='mt-2' >
                <PaymentSummary loading={loading} cart={cart} status="submitOrder" submitOrderHandler={submitOrderHandler}/>
            </Col>
        </Row>
    </div>
  )
}

export default SubmitOrderPage