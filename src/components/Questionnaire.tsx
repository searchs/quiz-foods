import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import {
    answerQuestion,
    resetAnswers,
    submitQuestionnaire,
} from '../store/questionnaireSlice';
import { Question as QuestionType, Answer } from '../types';
import { submitQuestionnaireThunk } from '../store/questionnaireThunks';


const Question: React.FC<{ question: QuestionType; answer?: Answer }> = ({ question, answer }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleOptionSelect = (option: string) => {
        dispatch(answerQuestion({ questionId: question.id, selectedOption: option }));
    };

    return (
        <div>
            <h3>{question.title}</h3>
            <p>{question.subheader}</p>
            {question.options.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={`${question.id}-${index}`}
                        name={question.id}
                        value={option.label}
                        checked={answer?.selectedOption === option.label}
                        onChange={() => handleOptionSelect(option.label)}
                    />
                    <label htmlFor={`${question.id}-${index}`}>{option.label}</label>
                </div>
            ))}
        </div>
    );
};

const Questionnaire: React.FC = () => {
    const { questions, answers, isSubmitted, isSubmitting } = useSelector((state: RootState) => state.questionnaire);
    const dispatch = useDispatch<AppDispatch>();

    const handleReset = () => {
        dispatch(resetAnswers());
    };

    const handleSubmit = () => {
        // dispatch(submitQuestionnaire());
        dispatch(submitQuestionnaireThunk());

    };

    const isAllQuestionsAnswered = questions.length === answers.length;

    if (isSubmitted) {
        return (
            <div>
                <h1>Thank you for completing the questionnaire!</h1>
                <button onClick={handleReset}>Start Over</button>
            </div>
        );
    }

    return (
        <div>
            <h1>Questionnaire</h1>
            {questions.map(question => (
                <Question
                    key={question.id}
                    question={question}
                    answer={answers.find(a => a.questionId === question.id)}
                />
            ))}
            <button onClick={handleReset}>Reset Answers</button>
            <button
                onClick={handleSubmit}
                disabled={!isAllQuestionsAnswered || isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    );
};

export default Questionnaire;