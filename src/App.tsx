import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom';

import Questionnaire from './components/Questionnaire';
import Login from './components/Login';
import './App.css';
import Signup from "./components/Signup";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Questionnaire/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>)
};

const Main: React.FC = () => (
    <Router>
        <App/>
    </Router>
)
export default Main;