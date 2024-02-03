import React, { useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'

import charity_img from "../img/Charity-pana.svg"
import labour5 from "../img/labour5.png"
import admin from "../img/admin.png"
import e_comm from "../img/e-comm.png"
import society from "../img/society.png"
import { Link } from 'react-router-dom';

export default function Project() {

    const [key, setKey] = useState('all');
    return (
        <>
            <section id="project" className='project'>
                <Container>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6} className='text-center'>
                            <h1 className='project-title'>Projects</h1>
                        </Col>
                    </Row>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={10} className='tabs-col'>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                                className="mb-5 justify-content-center"
                            >
                                <Tab eventKey="all" title="All">
                                    <Row className='justify-content-center'>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img labour' src={labour5} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://bootstrap-made.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Website template made with Bootstrap</h4>
                                            </div>
                                        </Col>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img admin' src={admin} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://b5-dash-board.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Dashboard template made with Bootstrap</h4>
                                            </div>
                                        </Col>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img' src={charity_img} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://do-charity.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Charity website made with Bootstrap/Javascript and Localstorage </h4>
                                            </div>
                                        </Col>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img' src={e_comm} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://e-comm-rjs.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>E-commerce website made with Bootstrap/Javascript/React and Localstorage </h4>
                                            </div>
                                        </Col>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img' src={society} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://society-hisab.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Society Maintenance Manage app  made with Bootstrap/Reactand Firestore </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="bootstrap" title="Bootstrap/HTML/CSS">
                                    <Row className='justify-content-center'>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img labour' src={labour5} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://bootstrap-made.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Website template made with Bootstrap</h4>
                                            </div>
                                        </Col>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img' src={admin} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://b5-dash-board.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Dashboard template made with Bootstrap</h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="javascript" title="Javascript">
                                    <Row className='justify-content-center'>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img' src={charity_img} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://do-charity.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Charity website made with Bootstrap/Javascript and Localstorage </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="react" title="React">
                                    <Row className='justify-content-center'>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img' src={e_comm} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://e-comm-rjs.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>E-commerce website made with Bootstrap/Javascript/React and Localstorage </h4>
                                            </div>
                                        </Col>
                                        <Col lg={4} className='mb-3'>
                                            <div className='project-card mb-3 rounded-3'>
                                                <img className='img-fluid project-img' src={society} alt="charity" />
                                                <div className='img-overlay'>
                                                    <div className='card-text'><Link className='nav-link' to="https://society-hisab.web.app/"><i className="bi bi-arrow-right-circle"></i></Link></div>
                                                </div>
                                            </div>
                                            <div className='card-content'>
                                                <h4>Society Maintenance Manage app  made with Bootstrap/Reactand Firestore </h4>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
