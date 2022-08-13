import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import Description from '../../Description/Description';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const { name, price, image, description } = props.service;
    return (
        <Card className='card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>price: {price} tk</p>
                <Card.Text>
                    <Link to={'/description'}>Show Details</Link>
                </Card.Text>
                {/* <Description description={description}></Description> */}
            </Card.Body>

        </Card>
    );
};

export default Services;