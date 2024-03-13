import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'

const CheckOut=({cartItems,chackOutHandler}) =>{
  return  (
    <Card>
        <Card.Body>
            <ListGroup>
                <ListGroup.Item>
                    <h3>
                        Subtotal:{'('}{cartItems.reduce((a,c)=>a+c.quantity,0)} {"items) "}{cartItems.reduce((a,c)=>a+c.price*c.quantity,0).toFixed(2)}$
                    </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className='d-grid'>
                        <Button onClick={()=>chackOutHandler()} type='button' disabled={cartItems.length===0} variant='primary'>
                            Check Out
                        </Button>
                    </div>

                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
  )
};

export default CheckOut