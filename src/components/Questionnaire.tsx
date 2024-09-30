import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import {
    answerQuestion,
    resetAnswers,
} from '../store/questionnaireSlice';
import { submitQuestionnaireThunk } from '../store/questionnaireThunks';
import { Question as QuestionType, Answer } from '../types';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

const Question: React.FC<{ question: QuestionType; answer?: Answer }> = ({ question, answer }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleOptionSelect = (option: string) => {
        dispatch(answerQuestion({ questionId: question.id, selectedOption: option }));
    };

    return (
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <Card.Title className={`fw-bolder fs-4`}>{question.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-fw-bold text-opacity-25">{question.subheader}</Card.Subtitle>
                <Form>
                    {question.options.map((option, index) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            className={`border border-2 rounded-4 p-4 mx-3 mb-2`}
                            id={`${question.id}-${index}`}
                            label={option.label}
                            name={question.id}
                            checked={answer?.selectedOption === option.label}
                            onChange={() => handleOptionSelect(option.label)}
                        />
                    ))}
                </Form>
            </Card.Body>
        </Card>
    );
};

const Questionnaire: React.FC = () => {
    const { questions, answers, isSubmitted, isSubmitting } = useSelector((state: RootState) => state.questionnaire);
    const dispatch = useDispatch<AppDispatch>();

    const handleReset = () => {
        dispatch(resetAnswers());
    };

    const handleSubmit = () => {
        dispatch(submitQuestionnaireThunk());
    };

    const isAllQuestionsAnswered = questions.length === answers.length;

    if (isSubmitted) {
        console.log(`ANSWERS : ${answers}`)
        return (
            <Container className="mt-5">
                <Alert variant="success">
                    <Alert.Heading>Thank you for completing the questionnaire!</Alert.Heading>
                    <p>Your responses have been recorded.</p>
                </Alert>
                <Button variant="primary" onClick={handleReset}>Start Over</Button>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Questionnaire</h1>
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
                    disabled={!isAllQuestionsAnswered || isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
            </div>
        </Container>
    );
};

export default Questionnaire;