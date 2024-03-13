import React from 'react'
import { Card, CardHeader, Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MessageBox from './MessageBox'

function OrderSummary({cart,status,isDeliverd}) {
  return (
    <>
        <Card className='mb-3'>
            <Card.Header>
                <Card.Title>
                    Shipping Address
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <strong>Name:</strong>
                    {cart.shippingAddress.fullName}<br/>
                    <strong>Address:</strong>
                    {cart.shippingAddress.address}<br/>
                    <strong>City:</strong>
                    {cart.shippingAddress.city}<br/>
                    <strong>PostalCode:</strong>
                    {cart.shippingAddress.postalCode}<br/>
                    <strong>Country:</strong>
                    {cart.shippingAddress.country}
                    {isDeliverd===false? <MessageBox variant="danger">Not Sent</MessageBox>:
                    isDeliverd===true?<MessageBox variant="success">Sent</MessageBox>:<></>}
                </Card.Text>
                {status==="submitOrder"&&<Link to={`/shipping`}>Edit</Link>}
            </Card.Body>
        </Card>
        <Card className='mb-3'>
            <Card.Header>
                <Card.Title>
                    Payment Method
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                <strong>Method:</strong>
                    {cart.paymentMethod}
                </Card.Text>
                {status==="submitOrder"?<Link to="/payment">Edit</Link>:
                status==="details-unpaid"? <MessageBox variant="danger">Not Paid</MessageBox>:
                <MessageBox variant="success">Paid</MessageBox>}
            </Card.Body>
        </Card>
        <Card className='mb-3'>
            <Card.Header>
                <Card.Title>
                    Items
                </Card.Title>
            </Card.Header>
            <Card.Body>
            <ListGroup>
                {cart.cartItems.map((item)=>(
                    <ListGroup.Item key={item._id}>
                        <Row>
                            <Col md={3} className='d-flex align-items-center'>
                                <img style={{border:'0'}}src={item.image} alt={item.title} className="img-fluid rounded img-thumbnail" />                 
                            </Col>
                            <Col md={5}>
                            <Link to={`/product/${item.token}`}>{item.title}</Link>
                            </Col>
                            <Col md={2}>
                                <strong>Quantity:</strong>{item.quantity}
                            </Col>
                            <Col md={2}>
                                {item.price}$
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {status==="submitOrder"&&<Link to={`/cart`}>Edit</Link>}
            </Card.Body>
        </Card>
    </>
  )
}

export default OrderSummary