import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import './Description.css'

import { useParams } from 'react-router-dom';

const Description = (props) => {
    const { serviceId } = useParams();
    // const [service, setService] = useState({});
    // useEffect(() => {
    //     fetch(`./netlearner.json`)
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [])

    return (
        <div className='about-course'>
            <h2>This is description of course id: {serviceId} </h2>
            <h2>Course Name: </h2>
            <h2>Total videos: </h2>
            <h3>Course Duration hours: </h3>
            <h3>Total test: </h3>
            <h3>Course Price: </h3>
        </div>
    );
};

export default Description;