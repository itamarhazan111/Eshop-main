import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Rating from '../Shared/Rating'

const  ProductDescription=({title,rating,price,description})=> {
  return (
    <ListGroup>
        <ListGroup.Item>
            <h1 style={{wordWrap:'break-word'}}>
                {title}
            </h1>
        </ListGroup.Item>
        <ListGroup.Item>
            <Rating rating={rating.rate} numReviews={rating.count}></Rating>
        </ListGroup.Item>
        <ListGroup.Item>
            price: ${price}
        </ListGroup.Item>
        <ListGroup.Item>
            Description:<p className='lead'>{description}</p>
        </ListGroup.Item>
    </ListGroup>
  )
}

export default ProductDescription