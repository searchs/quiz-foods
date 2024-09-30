import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User } from '../types';

const initialState: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<User>) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;

export default userSlice.reducer;