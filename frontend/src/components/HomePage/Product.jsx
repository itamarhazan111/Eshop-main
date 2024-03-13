import Button  from "react-bootstrap/Button"
import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Rating from '../Shared/Rating.jsx'
import { Store } from "../../Store.jsx"
import { addToCartHandler } from "../../utils.js"



const Product=({product})=> {
  console.log(product)
  const{state,dispatch:ctsDispatch}=useContext(Store);
  const {cartItems}=state.cart;
  return (
    <div>
        <Card>
            <Link to={`/product/${product.token}`}>
                <Card.Img variant='top' src={product.image} alt={product.title}/>
            </Link>
            <Card.Body  className='card-body'>
                <Link to={`/product/${product.token}`}/>
                <Card.Title style={{height:"4vh",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}>{product.title}</Card.Title>
                 <Rating rating={product.rating.rate} numReviews={product.rating.count}/>
            <Card.Text>${product.price}</Card.Text>
            {product.countInStock===0?<Button variant='lighte disabled'>Out of Stock</Button>:
            <Button className='btn-primary' onClick={()=>addToCartHandler(product,cartItems,ctsDispatch)}>Add to Cart</Button>}
            </Card.Body>

        </Card>
    </div>
  )
}

export default Product