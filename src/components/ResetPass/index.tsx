import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col, Alert } from 'react-bootstrap';

const ResetPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        // Simulate API request for password reset
        console.log('Reset password request sent for:', email);
        setSubmitted(true);
        setError(null);
    };

    return (
        <Container className="vh-100">
            <Row className="d-flex justify-content-center align-items-center vh-100">
                <Col md={6} lg={4}>
                    <Card className="p-4">
                        <h3 className="text-center mb-4">Reset Password</h3>
                        {submitted ? (
                            <Alert variant="success">
                                A password reset link has been sent to your email.
                            </Alert>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <div className="d-flex justify-content-center">
                                    <Button type="submit" variant="primary" size="lg">
                                        Send Reset Link
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPassword;
