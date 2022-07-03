import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <section id='aboutMe' className='about-section' >
            <h2 data-aos="zoom-in-left" className='fw-bold py-4'>About <span className='text-orangered'>Me</span></h2>
            <Container className='px-5'>
                <Row className='g-5' >
                    <Col md={6}>
                        <div data-aos="zoom-in" className='my-self-container'>
                        <h2 className='text-upparcase py-3 fw-bold'>About <span className='text-orangered'>MySelf</span></h2>
                        <div className='my-self'>
                        <p className='fs-5 text-start '>I am a Front-end web Developer. I am working as a Web Developer since 2019. I have experience with some projects for web design and development. I can provide clean code and pixel-perfect Design. I work with HTML5, CSS3, Bootstrap, Tailwind,  React, Node.js, Express.js, MongoDB, and Responsive Design.</p>
                        </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div data-aos="zoom-in">
                            <h2 className='text-upparcase py-3 fw-bold'>Skills</h2>
                            <div>
                            <div className='mb-3'>
                            <h5 className='text-start'>HTML5</h5>
                            <ProgressBar completed={90} />
                            </div>
                            <div className='mb-3'>
                            <h5 className='text-start '>CSS3</h5>
                            <ProgressBar completed={95} />
                            </div>
                            <div className='mb-3'>
                            <h5 className='text-start'>Bootstrap</h5>
                            <ProgressBar completed={90} />
                            </div>
                            <div className='mb-3'>
                            <h5 className='text-start '>Tailwind</h5>
                            <ProgressBar completed={90} />
                            </div>
                            <div className='mb-3'>
                            <h5 className='text-start'>Javascript</h5>
                            <ProgressBar completed={85} />
                            </div>
                            <div className='mb-3'>
                            <h5 className='text-start '>React</h5>
                            <ProgressBar completed={85} />
                            </div>
                            <div className='mb-3'>
                            <h5 className='text-start '>Node js</h5>
                            <ProgressBar completed={50} />
                            </div>
                    
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;