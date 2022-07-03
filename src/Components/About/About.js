import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import htmlImg from "../../Assest/html-logo.png";
import cssImg from "../../Assest/css-log.png";
import javascriptImg from "../../Assest/javascript-logo.png";
import bootstraptImg from "../../Assest/bootstrap-logo.png";
import tailwindtImg from "../../Assest/tailwind-logo.png";
import jqueryImg from "../../Assest/jquery-logo.png";
import reactImg from "../../Assest/react-logo.png";
import nodeImg from "../../Assest/node-logo.png";


const About = () => {

    const skillsImage = [
        {
            "image": htmlImg,
            "name": "HTML",
        },
        {
            "image": cssImg,
            "name": "CSS"
        },
        {
            "image": javascriptImg,
            "name": "Javascript"
        },
        {
            "image": reactImg,
            "name": "React.js",
       
        },
        {
            "image": jqueryImg,
            "name": "Jquery",
           
        },
        {
           
            "image":tailwindtImg,
            "name": "Tailwind CSS"
        },
        {
            "image": bootstraptImg,
            "name": "Bootstrap"

        },
        {
            "image": nodeImg,
            "name": "Node.js",

        }
    ]

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
                        <Row className='gy-5'>

                            {
                                skillsImage.map(skill =>
                                <Col md={3}>
                                    <div className='skill-image '>
                                    <img src={skill.image} alt="" />
                                    <h5 className='fs-bold'>{skill.name}</h5>
                                    </div>
                                    
                                    </Col>
                                )
                            } 
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;