import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import Typical from 'react-typical';
import profile from '../../Assest/profile.png';
import resume from "../../Assest/solayman_resume.pdf";


const Banner = () => {
    return (
        <section className='banner-section'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='banner-left px-md-5'>
                            <div>
                                <h3><strong className='banner-name-title'>Hello, I'm <span>Solayman</span></strong></h3>
                                <strong className='banner-name-title'>Front-end Web Developer</strong>

                                <h2 className='text-type '>
                                    <span className='d-flex'>
                                        <span className='type-my-skill'>My Skills:</span>
                                        <Typical
                                            loop={Infinity}
                                            steps={[
                                                'HTML5', 1000,
                                                'CSS3', 1000,
                                                'Javascript', 1000,
                                                'React', 1000,
                                                'Bootstrap', 1000,
                                                'Tailwind', 1000,
                                                'Responsive Design', 1000,

                                            ]}
                                        />
                                    </span>
                                </h2>
                                <div className="button-container d-flex">            
                <button className="button-87" role="button">Get hire</button>

                <a href={resume} className='text-decoration-none' download='solayman'><button className="button-87 " role="button">Download Resume</button></a>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='banner-right'>
                            <div className='img-container'>
                                <img src={profile} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;