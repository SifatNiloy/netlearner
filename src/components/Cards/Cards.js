import React from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css'

const Cards = (props) => {
    const { name, price, image, description } = props.course;
    return (
        <Card className='card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>price: {price} tk</p>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default Cards;