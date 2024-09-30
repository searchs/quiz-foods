import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import {
    answerQuestion,
    resetAnswers,
} from '../../store/questionnaireSlice';
import { submitQuestionnaireThunk } from '../../store/questionnaireThunks';

import { Question as QuestionType, Answer } from '../../types';
import { Container, Form, Button, Card, Col, Row,Alert } from 'react-bootstrap';

const Question: React.FC<{ question: QuestionType; answer?: Answer }> = ({ question, answer }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleOptionSelect = (option: string) => {
        dispatch(answerQuestion({ questionId: question.id, selectedOption: option }));
    };

    return (
        <Card className="mb-4 shadow-sm rounded-5 p-5">
            <Card.Body className={`bg-light rounded-5`}>
                <Row>
                    <Col md={5} className={`p-3`}>
                        <Card.Title className={`display-6 fw-bolder text-dark text-opacity-50`}> {question.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-fw-bold text-opacity-25">{question.subheader}</Card.Subtitle>
                    </Col>
                <Col md={7}>

                    <Form className={`p-5`}>
                        {question.options.map((option, index) => (
                            <Form.Check
                                key={index}
                                type="radio"
                                className={`fs-5 p-1 mb-3 fw-light`}
                                id={`${question.id}-${index}`}
                                label={option.label}
                                name={question.id}
                                checked={answer?.selectedOption === option.label}
                                onChange={() => handleOptionSelect(option.label)}
                            />
                        ))}
                    </Form>
                </Col>

                </Row>

            </Card.Body>
        </Card>
    );
};

const Questionnaire: React.FC = () => {
    const { questions, answers, isSubmitted, isSubmitting } = useSelector((state: RootState) => state.questionnaire);
    const { currentUser } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    const handleReset = () => {
        dispatch(resetAnswers());
    };

    const handleSubmit = () => {
        if (currentUser) {
            dispatch(submitQuestionnaireThunk(currentUser.id));
        } else {
            alert('Please log in to submit the questionnaire.');
        }
    };

    const isAllQuestionsAnswered = questions.length === answers.length;

    if (isSubmitted) {
        return (
            <Container className="mt-5">
                <Alert variant="success">
                    <Alert.Heading>Thank you for completing the questionnaire, {currentUser?.username}!</Alert.Heading>
                    <p>Your responses have been recorded.</p>
                </Alert>
                <Button variant="primary" onClick={handleReset}>Start Over</Button>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Questionnaire</h1>
            {currentUser && <p>Welcome, {currentUser.username}!</p>}
            {questions.map(question => (
                <Question
                    key={question.id}
                    question={question}
                    answer={answers.find(a => a.questionId === question.id)}
                />
            ))}
            <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={handleReset}>Reset Answers</Button>
                <Button
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={!isAllQuestionsAnswered || isSubmitting || !currentUser}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </div>
        </Container>
    );
};

export default Questionnaire;