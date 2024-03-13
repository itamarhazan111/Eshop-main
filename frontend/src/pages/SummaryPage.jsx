import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import CheckOutSteps from '../components/Shared/CheckOutSteps'
import { Col, Row } from 'react-bootstrap'
import OrderSummary from '../components/Shared/OrderSummary'
import PaymentSummary from '../components/Shared/PaymentSummary'
import { useParams } from 'react-router-dom'
import { Store } from '../Store'
import axios from 'axios'
import data from '../../../backend/data'

function SummaryPage() {
    const {id}=useParams();
    const [cart,setCart]=useState({cartItems:[],shippingAddress:{},paymentMethod:"",itemsPrice:0,
    taxPrice:0,shippingPrice:0,totalPrice:0})
    const [isPaid,setIsPaid]=useState("details-unpaid")
    const [isDeliverd,setIsDeliverd]=useState(false)
    const [loading,setLoading]=useState(false);
    const{state,dispatch:ctxDispatch}=useContext(Store);
    const {userInfo}=state;
    
    useEffect(()=>{
        const getOrder=async()=>{
                try{
                setLoading(true);
                const {data}=await axios.get("/api/v1/orders/"+id,{headers:{authorization:`bearer ${userInfo.token}`}});
                setCart({cartItems:data.order.orderItems,shippingAddress:data.order.shippingAddress,paymentMethod:data.order.paymentMethod,
                    itemsPrice:data.order.itemsPrice,taxPrice:data.order.taxPrice,
                    shippingPrice:data.order.shippingPrice,totalPrice:data.order.totalPrice })
                    if(data.order.isPaid){
                      setIsPaid("paid") ; 
                    }
                    if(data.order.isDeliverd){
                        setIsDeliverd(true)
                    }
                console.log(data)
                console.log(cart)
                }catch(error){
                    console.log(error.message)
                }finally{
                    setLoading(false);
                }
            };
            getOrder();
        },[])

  return (
    <div>
    <Title title="summary"/>
    <CheckOutSteps step1 step2 step3 step4/>
    <h1 className='my-3'>Order Summary</h1>
    <Row>
        <Col md={8}>
            <OrderSummary cart={cart} status={isPaid} isDeliverd={isDeliverd} />
        </Col>
         <Col md={4} className='mt-2' >
            <PaymentSummary cart={cart} loading={loading} status={isPaid} />
        </Col>    
    </Row>
</div>
  )
}

export default SummaryPage