import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser'
import './Contact.css'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t1wbgu8', 'template_2e8vlds', form.current, 'WdUrdvW1QViaQsOLh')
            .then((result) => {
                toast('send message succesfully')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='contact-section' id='contactMe'>
            <Container className='py-3'>
                <h2 data-aos="fade-right" className='fw-bold py-5 form-title'>Contact Me</h2>
                <Row>
                    <Col md={6}>
                        <div data-aos="zoom-in-right" className='contact-info'>
                            <div>
                                <a href="# "> <BsFillTelephoneFill /> 01771463302</a>
                            </div>
                            <div>
                                <a href="# "> <BsFillEnvelopeFill />  solaymanweb27@gmail.com  </a>
                            </div>
                            <div>
                                <a href='https://www.facebook.com/profile.php?id=100073778744524' target="_blank " > <FaFacebook />  Facebook</a>

                            </div>
                            <div>
                                <a href="https://www.linkedin.com/in/solayman-islam-743470222/" target=" _blank "><FaLinkedin /> linkedin </a>

                            </div>
                            <div>
                                <a href="https://github.com/solaymanWeb" target=" _blank "> <FaGithub /> Github</a>

                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='email-area' data-aos="zoom-in">
                            <Form ref={form} onSubmit={sendEmail}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='input-title'>Your Name</Form.Label>
                                    <Form.Control type="text" name='user_name' placeholder="Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='input-title'>Email address</Form.Label>
                                    <Form.Control type="email" name='user_email' placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className='input-title'>Subject</Form.Label>
                                    <Form.Control type="text" name='user_subject' placeholder="Subject" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className=' input-title'>Message</Form.Label>
                                    <Form.Control placeholder='Message' name='message' as="textarea" rows={3} />
                                </Form.Group>

                                <Button className="button-87" type="submit" role="button">send message <FaPaperPlane /></Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>


        </section>
    );
};

export default Contact;