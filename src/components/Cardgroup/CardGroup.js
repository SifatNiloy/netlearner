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
        phone: 18174002431,
        description: "Learn world's best photo editing software. Make yourself skilled in today."
    },
    {
        id: 2,
        name: "Adobe premiere pro cc 2022",
        image: "https://i.ytimg.com/vi/MqwlW76sFCM/maxresdefault.jpg",
        price: 650,
        email: "marcypotts@fossiel.com",
        phone: 18174002431,
        description: "Premiere pro is one of the most used video editing software. Many editors uses premiere pro in their everyday use. "
    },
    {
        id: 3,
        name: "Adobe After Effects",
        image: "https://www.coursesforfree.net/wp-content/uploads/2019/03/927360_bab9_4.jpg",
        price: 1500,
        email: "marcypotts@fossiel.com",
        phone: 18174002431,
        description: "One of the best motion graphics software you'll find. Start learning today."
    },
    {
        id: 4,
        name: "Adobe Audition",
        image: "https://freecoursesites.com/wp-content/uploads/2019/12/Adobe-Audition-CC-Audio-Production-Course-Basics-to-Expert-Course-Site.jpg",
        price: 1000,
        email: "marcypotts@fossiel.com",
        phone: 18174002431,
        description: "Learn sound editing, mixing. Remove noise and grains from video sound. Also works with premiere pro. "
    }

    ]
    return (
        <div>
            <CardGroup >
                <div className='group-cards'>
                    {
                        courses.map(course => <Cards key={courses.id} course={course}></Cards>)
                    }
                </div>

            </CardGroup>
        </div>
    );
};

export default CardGroupFirst;