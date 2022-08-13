import { Button } from 'react-bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import Description from '../../Description/Description';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    const navigate = useNavigate();
    const showDetail = () => {
        const path = `/services/${id}`;
        navigate(path);
    }

    const { name, price, image, description, id } = props.service;
    return (
        <Card className='card'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>price: {price} tk</p>
                <Card.Text>
                    <div className='custom-link'>
                        <Button onClick={showDetail} variant="primary">Show Detail</Button>
                        {/* <Link to={'/services/' + id}>Show Details</Link> */}
                    </div>
                </Card.Text>
                {/* <Description description={description}></Description> */}
            </Card.Body>

        </Card >
    );
};

export default Services;