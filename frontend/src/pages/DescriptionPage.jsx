import React, { useContext, useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Store } from '../Store.jsx';
import axios from 'axios';
import { addToCartHandler, getError } from '../utils.js';
import Loading from '../components/Shared/Loading';
import MessageBox from '../components/Shared/MessageBox';
import { Row ,Col} from 'react-bootstrap';
import ProductDescription from '../components/DescriptionPage/ProductDescription.jsx';
import CartDescription from '../components/DescriptionPage/CartDescription.jsx';
import descriptionPageReducer from '../reducers/descriptionPageReducer.jsx';
import { GET_FAIL, GET_REQUEST, GET_SUCCESS } from '../Actions.jsx';
import Title from '../components/Title.jsx';

const initialState={loading:true,error:'',data:[]}
const DescriptionPage=()=> {

    const params=useParams();
    const{ token} =params;
    const{state,dispatch:ctsDispatch}=useContext(Store);
    const {cartItems}=state.cart;
    const [{loading,error,data},dispatch]=useReducer(descriptionPageReducer,initialState);
    const navigate=useNavigate();

    useEffect(()=>{
    const getProducts=async()=>{
            dispatch({type:GET_REQUEST});
            try{
            const {data}=await axios.get("/api/v1/products/token/"+token);
            dispatch({type:GET_SUCCESS,payload:data});
            }catch(error){
            dispatch({type:GET_FAIL,payload:getError(error)});
            }
        };
        getProducts();
    },[token])
    const addToCart=async()=>{
        await addToCartHandler(data,cartItems,ctsDispatch)
        navigate('/cart')
    }
  return (
    <div><Title title={data.title}></Title>
        {loading?<Loading/> : error? <MessageBox variant={'danger'}>{error}</MessageBox>:(
            <div>
                <Row>
                    <Col md={6}>
                        <img width={400} src={data.image  } alt={data.title}>
                        </img>
                    </Col>
                    <Col md={3}>
                        <ProductDescription {...data}/>
                    </Col>
                    <Col md={3}>
                        <CartDescription addToCart={addToCart} product={data}/> 
                    </Col>
                </Row>
            </div>
            
        )}
    </div>
  )
}

export default DescriptionPage