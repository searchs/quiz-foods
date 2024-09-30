import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store';
import {loginStart, loginSuccess, loginFailure, logout} from '../store/userSlice';
import {Form, Button, Alert, Container, Card} from 'react-bootstrap';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const {currentUser, isLoading, error} = useSelector((state: RootState) => state.user);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginStart());
        // Simulate API call
        setTimeout(() => {
            if (username === 'demo' && password === 'password') {
                dispatch(loginSuccess({id: '1', username}));
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
            <div>
                <p>Logged in as {currentUser.username}</p>
                <Button onClick={handleLogout}>Logout</Button>
            </div>
        );
    }

    return (
        <Container>
            <Card className={`p-3`}>


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
                    <Form.Group className={`mb-3`}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Button type="submit" variant={`primary`} size={`lg`} disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Login;