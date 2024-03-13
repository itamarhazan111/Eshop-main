import React, { useContext } from 'react'
import Title from '../components/Title';
import { Col, Row, Toast } from 'react-bootstrap';
import ItemsInCart from '../components/CartPage/ItemsInCart';
import { Store } from '../Store';
import CheckOut from '../components/CartPage/CheckOut';
import { toast } from 'react-toastify';
import { ADD_TO_CART, REMOVE_FROM_TYPE } from '../Actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CartPage() {
    const navigate=useNavigate();
    const{state,dispatch:ctxDispatch}=useContext(Store);
    const {cartItems}=state.cart;

    const chackOutHandler=()=>{
        navigate("/signin?redirect=/shipping")
    }

    const updateCartItemHandler=async(product,quantity)=>{

        try {
            const { data } = await axios.get('/api/v1/products/'+product._id);
            //console.log(quantity)
            if (data.countInStock < quantity) {
                alert('Sorry, Product is out of stock');
                return;
            }
            ctxDispatch({ type: ADD_TO_CART, payload: { ...product, quantity } });
    
        } catch (err) {
            console.log(quantity)
            console.log(err)
            toast.error(err)
            // ctxDispatch({ type: GET_FAIL, payload: err.message });
        }

    }
    const removeCartItemHandler=async(item)=>{
        ctxDispatch({type:REMOVE_FROM_TYPE,payload:item});
    }
  return (
    <div>
        <Title title={'Shopping Cart'}></Title>
        <Row>
            <Col md={8}>
                <ItemsInCart cartItems={cartItems} updateCartItemHandler={updateCartItemHandler} removeCartItemHandler={removeCartItemHandler}/>
            </Col>
            <Col md={4} className='mt-2' >
                <CheckOut cartItems={cartItems} chackOutHandler={chackOutHandler} />
            </Col>
        </Row>
    </div>
  )
}

export default CartPage