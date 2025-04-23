import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// Define types
interface User {
    name: string;
    email: string;
}

interface LoginResponse {
    user?: User;  // Optional, in case of errors
    token?: string;  // Optional, in case of errors
    message: string; // Success or error message
    status: number;  // HTTP status code
}

// Error response type for rejection
interface ErrorResponse {
    message: string;
    status: number;
}

interface LoginState {
    user: User | null;
    token: string | null;
    error: string | null;
    message: string | null;
    loading: boolean;
}

const initialState: LoginState = {
    user: null,
    token: null,
    error: null,
    loading: false,
    message: null,
};

// Define async thunk action to login
export const loginUser = createAsyncThunk<LoginResponse, { email: string; password: string }, { rejectValue: ErrorResponse }>(
    'login/loginUser',
    async (loginData, { rejectWithValue }) => {
        try {
            const res = await fetch('/api/user/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await res.json();
            console.log("data", data);

            // Ensure that the response includes message and status
            if (res.ok) {
                return {
                    user: data.user,
                    token: data.token,
                    message: data.message,
                    status: res.status,
                };
            } else {
                return rejectWithValue({
                    message: data.message || 'Login failed',
                    status: res.status || 500,
                });
            }
        } catch (error) {
            console.log("error", error);
            return rejectWithValue({ message: 'An error occurred', status: 500 });
        }
    }
);

// Create loginSlice using createSlice
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                loginUser.fulfilled,
                (state, action: PayloadAction<LoginResponse>) => {
                    state.loading = false;
                    state.user = action.payload.user || null;
                    state.token = action.payload.token || null;
                    state.message = action.payload.message;
                    state.error = null;
                }
            )
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                
                // Type-safe error handling
                const error = action.payload as ErrorResponse;
                
                if (error?.message) {
                    state.error = error.message;
                } else {
                    state.error = 'An unexpected error occurred';
                }
                
                state.message = null;  // Clear any success message
            });
    },
});

export default loginSlice.reducer;
