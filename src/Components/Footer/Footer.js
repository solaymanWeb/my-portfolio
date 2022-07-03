import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='footer-area'>
                <Container>
                <Row>
                    <Col sm={12}>
                        <div className='footer-bottom'> <h4> Copyright &copy; solayman 2022 </h4> </div>
                    </Col>
                </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;