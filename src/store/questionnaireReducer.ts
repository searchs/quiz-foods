import { ADD_QUESTION, ANSWER_QUESTION, QuestionnaireActionTypes } from './actions';

interface Question {
    id: string;
    text: string;
    answer?: string;
}

interface QuestionnaireState {
    questions: Question[];
}

const initialState: QuestionnaireState = {
    questions: [],
};

const questionnaireReducer = (
    state = initialState,
    action: QuestionnaireActionTypes
): QuestionnaireState => {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, { id: action.payload.id, text: action.payload.text }],
            };
        case ANSWER_QUESTION:
            return {
                ...state,
                questions: state.questions.map((question) =>
                    question.id === action.payload.id
                        ? { ...question, answer: action.payload.answer }
                        : question
                ),
            };
        default:
            return state;
    }
};

export default questionnaireReducer;