import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom';

import Questionnaire from './components/Questionnaire';
import Login from './components/Login';
import './App.css';
import Signup from "./components/Signup";
import AppNavbar from "./components/AppNavbar";
import ResetPassword from "./components/ResetPass";
import ContactUs from "./components/Contact";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Questionnaire/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
        </Routes>)
};

const Main: React.FC = () => (
    <Router>
        <AppNavbar />
        <App/>
    </Router>
)
export default Main;