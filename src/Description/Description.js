import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Description = (props) => {
    // const [kothabatra, setKothabatra] = useState([]);
    // useEffect(() => {
    //     fetch
    // }, [])
    return (
        <div>
            <h2>This is description</h2>
            <p>{props.description}</p>
        </div>
    );
};

export default Description;