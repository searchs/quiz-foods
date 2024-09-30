import { AppDispatch } from './index';
import {
    submitQuestionnaire,
    submitQuestionnaireSuccess,
    submitQuestionnaireFail,
} from './questionnaireSlice';

export const submitQuestionnaireThunk = (userId: string) => async (dispatch: AppDispatch) => {
    dispatch(submitQuestionnaire());
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Here you would typically send the userId along with the questionnaire data
        console.log(`Submitting questionnaire for user ${userId}`);
        dispatch(submitQuestionnaireSuccess());
    } catch (error) {
        dispatch(submitQuestionnaireFail());
    }
};