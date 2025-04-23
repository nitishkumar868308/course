import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '@/app/redux/store';

interface User {
    name: string;
    email: string;
}

interface LoginState {
    user: User | null;
    token: string | null;
    error: string | null;
    loading: boolean;
}

const initialState: LoginState = {
    user: null,
    token: null,
    error: null,
    loading: false,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

// Async action to handle the login API call
export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(loginStart());
    try {
        const res = await fetch('/api/user/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            dispatch(loginSuccess({ user: data.user, token: data.token }));
        } else {
            dispatch(loginFailure(data.error || 'Login failed'));
        }
    } catch (error) {
        console.error('Error during login:', error);
        dispatch(loginFailure('An error occurred'));
    }
};

export const { loginStart, loginSuccess, loginFailure } = loginSlice.actions;
export default loginSlice.reducer;
