import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Allprojects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projectdata.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects)

    return (
        <div>
            <section className='py-5 project-section' id='myProject'>
                <h2 data-aos="fade-right" className='fw-bold pt-5'>My <span className='text-orangered'>Latest Project</span></h2>
                <div>
                    <Container className='pt-5'>
                        <Row className='g-5'>
                            {
                                projects.map(project => <>
                             

                                    <Col md={4} className=''>
                                        <div data-aos="zoom-in-right" className='card-container'>
                                            <Card>
                                                <div className='projects-container'>
                                                    <Card.Img variant="top" src={project.image} />
                                                </div>
                                                <Card.Body className='card-details'>
                                                    <Card.Title>{project.name}</Card.Title>
                                                    <Card.Text>
                                                        {project.technology}
                                                    </Card.Text>
                                                    <div className='d-flex'>
                                                        <a href={project.live} target="_blank" rel="noopener noreferrer"> <Button className="button-87 live-btn" role="button">view live site</Button></a>
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
        </div>
    );
};

export default Allprojects;
