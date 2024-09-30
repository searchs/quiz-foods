import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './questionnaireSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        questionnaire: questionnaireReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;