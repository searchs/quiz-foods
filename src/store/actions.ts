export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

interface AddQuestionAction {
    type: typeof ADD_QUESTION;
    payload: {
        id: string;
        text: string;
    };
}

interface AnswerQuestionAction {
    type: typeof ANSWER_QUESTION;
    payload: {
        id: string;
        answer: string;
    };
}

export type QuestionnaireActionTypes = AddQuestionAction | AnswerQuestionAction;

export const addQuestion = (id: string, text: string): AddQuestionAction => ({
    type: ADD_QUESTION,
    payload: { id, text },
});

export const answerQuestion = (id: string, answer: string): AnswerQuestionAction => ({
    type: ANSWER_QUESTION,
    payload: { id, answer },
});