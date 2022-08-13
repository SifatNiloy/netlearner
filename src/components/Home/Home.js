import React from 'react';
import { Button } from 'react-bootstrap';
import CardGroup from '../Cardgroup/CardGroup';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='second-section'>
                <h1>Access 200+ </h1>
                <h1> Online Course From Top Instructor.</h1>
                <h3>Meet instructors, who'll share their experience.</h3>
            </div>
            <div className='explore'>
                <h1 className='orange-text'>Explore Our Popular Courses</h1>
                <p>You don't have to struggle alone, you've got our assistance and help</p>

            </div>
            <CardGroup></CardGroup>
            <br />
            <Button variant="primary">View all courses</Button>

        </div>
    );
};

export default Home;