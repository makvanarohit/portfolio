import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import hero21 from "../img/hero21.png";
import { Link } from 'react-router-dom';



export default function Herosection() {
    return (
        <><section className='hero-section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <h1 className='title'>Hello, I'm Rohit</h1>
                        <TypeAnimation
                            sequence={[
                                'Web Devloper',
                                5000,
                                'Frontend Devloper',
                                5000,
                                'Backend Devloper',
                                5000,
                                'FullStack Devloper',
                                5000
                            ]}
                            wrapper="h1"
                            speed={50}
                            className='text-anim'
                            repeat={Infinity}
                        />
                        <div className='hero-btn'>
                            <Button className='contact-btn btn-light'><Link className='nav-link' to="/contact">Hire ME</Link></Button>
                            <Button className='download-btn btn-light'>Download CV</Button>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='hero-profile'>
                            <img src={hero21} alt="hero-img" className='img-fluid hero-img' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}
