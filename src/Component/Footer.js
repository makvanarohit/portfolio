import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <section className='footer'>
                <Container>
                    <Row className='align-items-center justify-content-between'>
                        <Col className='footer-logo'>
                            <Link to="/" className='nav-link'><i className="bi bi-r-circle fs-2"></i></Link>
                        </Col>
                        <Col className='footer-text text-end'>MADE BY <span className='ms-2 text-primary'><i className="bi bi-r-circle fs-6"></i></span></Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
