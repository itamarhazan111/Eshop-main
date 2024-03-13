import React from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'

const CartDescription=({product,addToCart})=> {
  return (
    <Card>
        <Card.Body>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>
                        Price:
                        </Col>
                        <Col>
                        ${product.price}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup>
                    <Row>
                        <Col>
                        Status:
                        </Col>
                        <Col>
                        {product.countInStock>0?<Badge bg='success'>in stock</Badge>:<Badge bg='danger'>out of stock</Badge>}
                        </Col>
                    </Row>
                </ListGroup>
                {product.countInStock>0&& <ListGroup.Item><div className='d-grid'><Button variant='primary' onClick={()=>addToCart()}>Add to Cart</Button></div></ListGroup.Item>}
            </ListGroup>
        </Card.Body>
    </Card>
  )
}

export default CartDescription