import React from 'react'
import MessageBox from '../Shared/MessageBox'
import { Link } from 'react-router-dom'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'


function ItemsInCart({cartItems,updateCartItemHandler,removeCartItemHandler}) {

  return (
    <div>
        {cartItems.length===0 ?( <MessageBox>your cart is empty. <Link to='/'>Go back to home page</Link></MessageBox>):
            (<ListGroup>
                {cartItems.map((item)=>(
                    <ListGroup.Item key={item._id}>
                        <Row>
                            <Col md={3} className='d-flex align-items-center'>
                                <img style={{border:'0'}}src={item.image} alt={item.title} className="img-fluid rounded img-thumbnail" />                 
                            </Col>
                            <Col md={5}>
                            <Link to={`/product/${item.token}`}>{item.title}</Link>
                            </Col>
                            <Col md={2} style={{padding:'0'}}>
                                <Button onClick={()=>updateCartItemHandler(item,item.quantity-1)} disabled={item.quantity===1} variant='light'>
                                    <i className='fa fa-minus-circle'></i>
                                </Button>
                                <span>
                                {item.quantity}
                                </span>
                                <Button onClick={()=>updateCartItemHandler(item,item.quantity+1)} disabled={item.quantity===item.countInStock} >
                                    <i className='fa fa-plus-circle'></i>
                                </Button>
                            </Col>
                            <Col md={1}>
                                {item.price}$
                            </Col>
                            <Col md={1}>
                                <Button onClick={()=>removeCartItemHandler(item)}><i className='fa fa-trash'></i></Button>
                                
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        )}
    </div>
  )
}

export default ItemsInCart