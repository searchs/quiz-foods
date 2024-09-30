import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { loginStart, loginSuccess, loginFailure, logout } from '../../store/userSlice';
import { Form, Button, Alert, Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // assuming you're using react-router for navigation

const Signup: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const { currentUser, isLoading, error } = useSelector((state: RootState) => state.user);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());
        // Simulate API call
        setTimeout(() => {
            if (username === 'demo' && password === 'password') {
                dispatch(loginSuccess({ id: '1', username }));
            } else {
                dispatch(loginFailure('Invalid username or password'));
            }
        }, 1000);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    if (currentUser) {
        return (
            <Container>
                <Row className="d-flex justify-content-center align-items-center vh-100">
                    <Col md={6}>
                        <p>Logged in as {currentUser.username}</p>
                        <Button onClick={handleLogout}>Logout</Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container className="vh-100">
            <Row className="d-flex justify-content-center align-items-center vh-100">
                <Col md={6} lg={4}>
                    <Card className="p-4">
                        <Form onSubmit={handleLogin}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            {error && <Alert variant="danger">{error}</Alert>}

                            <div className="d-flex justify-content-center">
                                <Button type="submit" variant="primary" size="lg" disabled={isLoading} className={`w-50`}>
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </Button>
                            </div>
                        </Form>

                        <div className="text-center mt-4">
                            <p>
                                <Link to="/signup">Signup</Link> |
                                <Link to="/reset-password" className="ms-2">Reset Password</Link> |
                                <Link to="/" className="ms-2">Home</Link>
                            </p>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
