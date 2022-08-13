import React from 'react';
import { Button } from 'react-bootstrap';
import './Instructor.css'

const Instructor = () => {
    return (
        <div>
            <div className='first-section'>
                <h1>Come teach with us</h1>
                <h5>Become an instructor and change lives — including your own</h5>
                <br />
                <Button variant="secondary">Get Started</Button>
            </div>
            <div className='second-section'>
                <h1>So many reasons to start</h1>
                <div className='teaching-reason'>
                    <div className="reasons">
                        <img src="./photos/teach.png" alt="" />
                        <h5>Teach your way</h5>
                        <p>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </div>
                    <div className="reasons">
                        <img src="./photos/inspire.png" alt="" />
                        <h5>Inspire learners</h5>
                        <p>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                    </div>
                    <div className="reasons">
                        <img src="../photos/reward.png" alt="" />
                        <h5>Get rewarded</h5>
                        <p>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                    </div>
                </div>
            </div>
            <div className="third-section">
                <div className="statistics">
                    <h1>1500+</h1>
                    <p>Students</p>
                </div>
                <div className="statistics">
                    <h1>3000+</h1>
                    <p>Enrollment</p>
                </div>
                <div className="statistics">
                    <h1>10+</h1>
                    <p>Countries</p>
                </div>
                <div className="statistics">
                    <h1>50+</h1>
                    <p>Instructors</p>
                </div>
                <div className="statistics">
                    <h1>90%</h1>
                    <p>Course Completion</p>
                </div>
            </div>
            <div className="fourth-section">
                <h1>How to begin</h1>
                <div className='course-making'>
                    <div className='steps'>
                        <h4>Plan Your curriculum</h4>
                    </div>
                    <div className='steps'>
                        <h4>Record Your video </h4>
                    </div>
                    <div className='steps'>
                        <h4>Launch Your course</h4>
                    </div>
                </div>
                <div className="help">
                    <div className="left-side">
                        <p>You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool.
                            The way that you teach — what you bring to it — is up to you.</p>
                        <h5>How we help you</h5>
                        <p>We offer plenty of resources on how to create your first course. And, our instructor dashboard and curriculum pages help keep you organized.</p>
                    </div>
                    <div className="right-side">
                        <img src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;