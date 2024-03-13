import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import Loading from './Loading'

function PaymentSummary({cart,loading,status,submitOrderHandler}) {
  return (
    <>
        <Card>
            <Card.Header>
                <Card.Title>
                    Payment Summary
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <ListGroup className='mb-3'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Items:
                            </Col>
                            <Col>
                                ${cart.itemsPrice.toFixed(2)}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Shipping:
                            </Col>
                            <Col>
                                ${cart.shippingPrice.toFixed(2)}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                Tax:
                            </Col>
                            <Col>
                                ${cart.taxPrice.toFixed(2)}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                             <strong>Total</strong>
                            </Col>
                            <Col>
                                <strong>${cart.totalPrice.toFixed(2)}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                {status==="submitOrder"&& <Button variant="primary" onClick={submitOrderHandler}>Submit</Button>}
                {loading &&<Loading/>}
            </Card.Body>
        </Card>
    </>
  )
}

export default PaymentSummary