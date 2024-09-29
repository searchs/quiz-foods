import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionnaireState, Question, Answer } from '../types';

const initialState: QuestionnaireState = {
    questions: [
        {
            id: '1',
            title: "Do you need help with any of the following issues?",
            subheader: 'Select One (1)',
            options: [
                { label: 'Scalp Dryness' },
                { label: 'Split ends / Hair breakage' },
                { label: 'Thinning hair' },
                { label: 'None of the above' }
            ],
            type: 'question',
        },
        {
            id: '2',
            title: "How would you describe your hair overall?",
            subheader: 'Select One (1)',
            options: [
                { label: 'Generally dry' },
                { label: 'Oily roots and dry ends' },
                { label: 'Flaky scalp and dry ends' },
                { label: 'Fairly balanced / No outstanding issues' }
            ],
            type: 'question',
        }
    ],
    answers: [],
    isSubmitted: false,
    isSubmitting: false,
};

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        answerQuestion: (state, action: PayloadAction<Answer>) => {
            const existingAnswerIndex = state.answers.findIndex(
                answer => answer.questionId === action.payload.questionId
            );
            if (existingAnswerIndex !== -1) {
                state.answers[existingAnswerIndex] = action.payload;
            } else {
                state.answers.push(action.payload);
            }
        },
        resetAnswers: (state) => {
            state.answers = [];
            state.isSubmitted = false;
        },
        submitQuestionnaire: (state) => {
            state.isSubmitting = true;
        },
        submitQuestionnaireSuccess: (state) => {
            state.isSubmitting = false;
            state.isSubmitted = true;
        },
        submitQuestionnaireFail: (state) => {
            state.isSubmitting = false;
        },
    },
});

export const {
    answerQuestion,
    resetAnswers,
    submitQuestionnaire,
    submitQuestionnaireSuccess,
    submitQuestionnaireFail,
} = questionnaireSlice.actions;

export default questionnaireSlice.reducer;