import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import electricTools from '../../Assest/electricTools.png';
import fridgeHouse from '../../Assest/friedgeHouse.png';
import gymSite from '../../Assest/gymeWebSite.png';
import nikeReact from '../../Assest/nikeReact.png';
import convarsion from '../../Assest/ConventionalSite.png'
import './Projects.css';

const Projects = () => {

    const allDemoSite = [
        {
            "image": electricTools,
            "name": "Menufectural web site",
            "live": "https://solaymanweb.github.io/themezone/",
            "discription": "When you have Walton refrigerator & freezer in your home",
        },
        {
            "image": fridgeHouse,
            "name": "Managemet web site",
            "discription": "you are safe from going to market every day that keeps",
        },
        {
            "image": electricTools,
            "name": "Manufectural web site",
            "discription": "you free from extra burden. You can keep all your foods and stuffs",
        },
        {
            "image": gymSite,
            "name": "gyme orgaingetion ",
            "discription": "Our energy-saving, stylish, equipped with 100%",
        },
        {
            "image":nikeReact,
            "name": "basic e-commerce",
            "discription": "Walton refrigerator & freezer will make a vivid distinction in your kitchen",
        },
        {
            "image": convarsion,
            "name": "Conversion site",
            "discription": "WFA-2A3-GDXX-XX ",

        }
    ]


    return (
        <section className='py-5 ' id='myProject'>
            <h2 className='fw-bold pt-5'>My <span className='text-orangered'>Project</span></h2>
            <div>

                <Container className='pt-5'>
                    <Row className='g-5'>
                        {
                            allDemoSite.map(site => <>
                            
                                <Col md={4} className=''>
                                    <div className='card-container'>
                                        <Card>
                                            <div className='projects-container'>
                                                <Card.Img variant="top" src={site.image} />
                                            </div>
                                            <Card.Body className='card-details'>
                                                <Card.Title>Title: {site.name}</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of love love love
                                                    the card's content.
                                                </Card.Text>
                                                <div className='d-flex'>
                               <a href={site.live} target="_blank" rel="noopener noreferrer"> <button className="button-87" role="button">Live</button></a>
                                <button className="button-87" role="button">Github</button>
                                
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