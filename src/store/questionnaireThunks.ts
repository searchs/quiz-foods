import { AppDispatch } from './index';
import {
    submitQuestionnaire,
    submitQuestionnaireSuccess,
    submitQuestionnaireFail,
} from './questionnaireSlice';

export const submitQuestionnaireThunk = () => async (dispatch: AppDispatch) => {
    dispatch(submitQuestionnaire());
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(submitQuestionnaireSuccess());
    } catch (error) {
        dispatch(submitQuestionnaireFail());
    }
};