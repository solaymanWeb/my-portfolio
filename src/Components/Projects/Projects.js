import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import img1 from '../../Assest/p-1.png'
import img2 from '../../Assest/p-2.png'
import img3 from '../../Assest/p-3.png'
import img4 from '../../Assest/p-4.png'
import img5 from '../../Assest/p-5.png'
import img6 from '../../Assest/p-6.png'
import './Projects.css';

const Projects = () => {

    const allDemoSite = [
        {
            "image": img1,
            "name": "PSD to HTML.....",
            "technology":"",
            "live": "https://solaymanweb.github.io/themezone/",
            "discription": "When you have Walton refrigerator & freezer in your home",
        },
        {
            "image": img2,
            "name": "Managemet web site with ReactJS, nodeJS",
            "live":"https://electric-tools.netlify.app/",
            "discription": "you are safe from going to market every day that keeps",
        },
        {
            "image": img3,
            "name": "Manufectural web site with ReactJS, nodeJS",
            "live":"https://fridge-store-house.netlify.app/",
            "discription": "you free from extra burden. You can keep all your foods and stuffs",
        },
        {
            "image": img4,
            "name": "Figma to HTML ",
            "live": "https://solaymanweb.github.io/Figma-to-html/",
            "discription": "Our energy-saving, stylish, equipped with 100%",
        },
        {
            "image":img5,
            "name": "PSD to HTML",
            "live": "https://nike-react-ecommerce-web-site.netlify.app/",
            "discription": "Walton refrigerator & freezer will make a vivid distinction in your kitchen",
        },
        {
            "image": img6,
            "name": "PSD to HTML___",
            "live":"https://solaymanweb.github.io/PSD-to-HTML/",
            "discription": "WFA-2A3-GDXX-XX ",

        }
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
                                                    {site.technology}
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
                    </Row>
                </Container>

            </div>
        </section>
    );
};

export default Projects;