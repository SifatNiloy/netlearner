import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
const Services = (props) => {
    const { name, price, image, description } = props.service;
    return (
        // <div>
        //     <h1>This is services</h1>
        //     <h2>name</h2>
        // </div>
        <Card className='card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>price: {price} tk</p>
                <Card.Text>
                    <Button variant="outline-primary">See Details</Button>
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default Services;