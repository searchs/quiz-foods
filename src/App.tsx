import React from 'react';
import Questionnaire from './components/Questionnaire';
import { Container } from 'react-bootstrap';
import './App.css';

const App: React.FC = () => {
    return (
        <Container className="App">
            <Questionnaire />
        </Container>
    );
};

export default App;