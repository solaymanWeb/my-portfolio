import React from 'react';
import { Col, Container, Button, Row } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin} from "react-icons/fa";
import './Banner.css';
import Typical from 'react-typical';
import profile from '../../Assest/profile.jpg';
import resume from "../../Assest/solayman_resume.pdf";
import traiangle from "../../Assest/triangle-01.png";
import circleShap from "../../Assest/circle-01.png";
import circleRed from "../../Assest/circle-red.png";


const Banner = () => {
    return (
        <section className='banner-section '>
            <Container className='banner-container'>
                <Row>
                    <Col md={6}>
                        <div className='triangle' id='traiangle-id'>
                            <img src={traiangle} alt="" />
                        </div>
                       
                        <div data-aos="fade-right" className='banner-left h-sm-auto px-md-5 '>
                            <div className='all-text'>
                            <div className='px-0' >
                                <ul className='social-link'>
                                    <li> <a href='https://www.facebook.com/profile.php?id=100073778744524' target="_blank "> <FaFacebook /></a> </li>
                                    <li> <a href="https://www.linkedin.com/in/solayman-islam-743470222/" target="_blank "> <FaLinkedin /></a> </li>
                                    <li> <a href="https://github.com/solaymanWeb" target="_blank "><FaGithub /></a> </li>
                                </ul>
                            </div>
                                <h1 className='banner-name-title fs-2'><strong> Hello, I am Solayman </strong></h1>
                                <h6><strong className='banner-name-title fs-4'>Front-end Web Developer</strong></h6>

                                <h2 className='text-type '>
                                    <span className='d-flex'>
                                        <p className='fs-4'> My skill:   </p>
                                        <Typical className='fs-4 px-2'
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
                                    <Button className="button-87" role="button">Get hire</Button>

                                    <a href={resume} className='text-decoration-none' download='solayman'><Button className="button-87 " role="button">Download Resume</Button></a>

                                </div>
                            </div>
                        </div>

                        <div className='glass' id='glass-id'>
                            <img src={circleRed} alt="" />
                        </div>
                    </Col>


                    <Col md={6}>
                        <div className='circle-shap' id='bottom-circle-id'>
                            <img src={circleShap} alt="" />
                        </div>
                        <div data-aos="fade-left" className='banner-right'>
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