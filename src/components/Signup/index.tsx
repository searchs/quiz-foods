import React, { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { getNames } from 'country-list';

interface CountryOption {
    value: string;
    label: string;
}

const Signup: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    // Get the list of country names and map to { value, label } format for react-select
    const countryOptions: CountryOption[] = getNames().map((countryName) => ({
        value: countryName,
        label: countryName,
    }));

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Submit the signup data to your API or backend service
        console.log({
            firstName,
            lastName,
            email,
            mobile,
            country,
        });

        // Reset form (optional)
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setCountry('');
    };

    return (
        <Container className="vh-100">
            <Row className="d-flex justify-content-center align-items-center vh-100">
                <Col md={6} lg={4}>
                    <Card className="p-4">
                        <h3 className="text-center mb-4">Signup</h3>
                        <Form onSubmit={handleSignup}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={firstName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                    required
                                    placeholder="Enter your first name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={lastName}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                                    required
                                    placeholder="Enter your last name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter your email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    value={mobile}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
                                    required
                                    placeholder="Enter your mobile number"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Country</Form.Label>
                                <Select
                                    options={countryOptions}
                                    onChange={(selectedOption) => setCountry(selectedOption?.value || '')}
                                    placeholder="Select your country"
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button type="submit" variant="primary" size="lg">
                                    Signup
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
