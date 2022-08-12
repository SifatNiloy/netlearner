import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Services from '../Services/Services';
import './ServiceCard.css'

const ServiceCard = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./netlearner.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>This is Service card</h2>
            <div className='all-services'>
                {
                    services.map(service => <Services key={service.id} service={service}></Services>)
                }
            </div>
        </div>
    );
};

export default ServiceCard;