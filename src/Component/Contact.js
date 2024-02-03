import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <section className='contact'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6} className='text-center'>
                            <h1 className='contact-title'>Contact</h1>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-between'>
                        <Col lg={4} className='contact-area'>
                            <h5 className='contact-subtitle'>Let&apos;s Connect</h5>
                            <p className='contact-text'>
                                I&apos;m currently looking for new opportunities, my inbox is always
                                open. Whether you have a question or just want to say hi, I&apos;ll
                                try my best to get back to you!
                            </p>
                            <div className='social'>
                                <Link className='nav-link' to="http://www.linkedin.com">
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control type="email" placeholder="jacob@google.com" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="subject" placeholder="Just saying hi" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Let's talk about..." />
                                </Form.Group>
                                <Button variant="light" type="submit" className='w-100'>
                                    SUBMIT
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}
