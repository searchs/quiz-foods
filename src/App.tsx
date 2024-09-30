import React from 'react';
import Questionnaire from './components/Questionnaire';
import Login from './components/Login';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';

const App: React.FC = () => {
    return (
        <Container className="App">
            <Row>
                <Col md={4}>
                    <Login/>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Questionnaire/>
                </Col>
            </Row>
        </Container>
    );
};

export default App;