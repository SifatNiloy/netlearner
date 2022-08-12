import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Cards from '../Cards/Cards'
import './CardGroup.css'

const CardGroupFirst = () => {
    const courses = [{
        id: 1,
        name: "Adobe photoshop cc 2022",
        image: "https://www.howtofree.org/wp-content/uploads/2020/11/maxresdefault-1-1024x576.jpg",
        price: 450,
        email: "marcypotts@fossiel.com",
        phone: 18174002431
    },
    {
        id: 2,
        name: "Adobe premiere pro cc 2022",
        image: "https://i.ytimg.com/vi/MqwlW76sFCM/maxresdefault.jpg",
        price: 650,
        email: "marcypotts@fossiel.com",
        phone: 18174002431
    },
    {
        id: 3,
        name: "Adobe After Effects",
        image: "https://www.coursesforfree.net/wp-content/uploads/2019/03/927360_bab9_4.jpg",
        price: 450,
        email: "marcypotts@fossiel.com",
        phone: 18174002431
    },
    {
        id: 4,
        name: "Adobe Audition",
        image: "https://freecoursesites.com/wp-content/uploads/2019/12/Adobe-Audition-CC-Audio-Production-Course-Basics-to-Expert-Course-Site.jpg",
        price: 450,
        email: "marcypotts@fossiel.com",
        phone: 18174002431
    }

    ]
    return (
        <div>
            <CardGroup className='group-cards'>
                {
                    courses.map(course => <Cards key={courses.id} course={course}></Cards>)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroupFirst;