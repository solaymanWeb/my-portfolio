import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import img1 from '../../Assest/p-1.png'
import img2 from '../../Assest/p-2.png'
import img3 from '../../Assest/p-3.png'
import img4 from '../../Assest/p-4.png'
import img5 from '../../Assest/p-5.png'
import img6 from '../../Assest/p-6.png'
import img7 from '../../Assest/p-7.png'
import img8 from '../../Assest/p-8.png'
import img9 from '../../Assest/p-9.png'
import './Projects.css';

const Projects = () => {

    const allDemoSite = [
        {
            "image": img1,
            "name": "Figma to HTML....",
            "technology":"HTML, CSS, Bootstrap, Jquery, media query",
            "live": "https://solaymanweb.github.io/themezone/",
        },
        {
            "image": img2,
            "name": "E-commerce whole sell website",
            "technology":"HTML, CSS, Tailwind CSS, React.js, Firebase, Node.js, Express.js, MongoDB etc",
            "live":"https://electric-tools.netlify.app/",
        },
        {
            "image": img9,
            "name": "Book and online course selling site",
            "technology":"HTML, CSS, Tailwind CSS, React.js, Redux, Firebase, socket.io Node.js, Express.js, MongoDB etc",
            "live":"https://pathagar-7e2af.firebaseapp.com/",
        },
        {
            "image": img3,
            "name": "Management web site",
            "technology":"HTML, CSS, Tailwind CSS, React.js, Firebase, Node.js, Express.js, MongoDB etc",
            "live":"https://fridge-store-house.netlify.app/",
        },
        {
            "image": img6,
            "name": "PSD to HTML___",
            "technology":"HTML, CSS, Bootstrap, CSS animation, Jquery",
            "live":"https://solaymanweb.github.io/PSD-to-HTML/",
        },
        {
            "image": img8,
            "name": "E-commerce page Design",
            "technology":"HTML, CSS, Bootstrap, Jquery",
            "live":"https://solaymanweb.github.io/XD-to-HTML/",
        },
        {
            "image": img4,
            "name": "Figma to HTML ",
            "technology":"HTML, CSS, Bootstrap, Jquery",
            "live": "https://solaymanweb.github.io/Figma-to-html/",
        },
        {
            "image":img5,
            "name": "Figma to HTML",
            "technology":"HTML, Valina CSS using Flexbox",
            "live": "https://nike-react-ecommerce-web-site.netlify.app/",
        },
        {
            "image": img7,
            "name": "Udemy course page Design",
            "technology":"HTML, CSS, Bootstrap, responsive",
            "live":"https://solaymanweb.github.io/udemy/",

        },
    ]


    return (
        <section className='py-5 project-section' id='myProject'>
            <h2  data-aos="fade-right" className='fw-bold pt-5'>My <span className='text-orangered'>Project</span></h2>
            <div>

                <Container className='pt-5'>
                    <Row className='g-5'>
                        {
                            allDemoSite.map(site => <>
                            
                                <Col md={4} className=''>
                                    <div data-aos="zoom-in-right" className='card-container'>
                                        <Card>
                                            <div className='projects-container'>
                                                <Card.Img variant="top" src={site.image} />
                                            </div>
                                            <Card.Body className='card-details'>
                                                <Card.Title> {site.name}</Card.Title>
                                                <Card.Text>
                                                   <h6> {site.technology}</h6>
                                                </Card.Text>
                                                <div className='d-flex'>
                               <a href={site.live} target="_blank" rel="noopener noreferrer"> <Button className="button-87 live-btn" role="button">view live site</Button></a>

                                
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </>)
                        }
                        {/* <Link to="/allproject">More Project</Link> */}
                        <Link to='/allproject'><button className="btn btn-primary">see more project</button></Link>
                    </Row>
                </Container>

            </div>
        </section>
    );
};

export default Projects;