import React from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css'

const Cards = (props) => {
    const { name, price, image } = props.course;
    return (
        <Card className='card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>price: {price} tk</p>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default Cards;