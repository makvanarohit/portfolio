import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';

export default function TabButton() {

    const [key, setKey] = useState('skills');

    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="skills" title="Skills">
                    <ul className="">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoBD</li>
                        <li>React</li>
                        <li>JavaScript</li>
                    </ul>
                </Tab>
                <Tab eventKey="profile" title="Education">
                    <ul className="education">
                        <li>Bachelor of Engineering</li>
                        <li>Gujarat Technological University</li>
                    </ul>
                </Tab>
            </Tabs>
        </>
    )
}
