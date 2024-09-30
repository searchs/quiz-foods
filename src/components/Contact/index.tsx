import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col, Alert } from 'react-bootstrap';

const ContactUs: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !email || !message) {
            setError('All fields are required.');
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Simulate sending the contact message
        console.log('Contact request sent:', { name, email, message });

        // Reset form and show success message
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
        setError(null);
    };

    return (
        <Container className="vh-100">
            <Row className="d-flex justify-content-center align-items-center vh-100">
                <Col md={6} lg={4}>
                    <Card className="p-4">
                        <h3 className="text-center mb-4">Contact Us</h3>
                        {submitted ? (
                            <Alert variant="success">Your message has been sent successfully.</Alert>
                        ) : (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={name}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
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
                                <Form.Group className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        value={message}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                                        required
                                        rows={4}
                                        placeholder="Enter your message"
                                    />
                                </Form.Group>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <div className="d-flex justify-content-center">
                                    <Button type="submit" variant="primary" size="lg">
                                        Send Message
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

export default ContactUs;
