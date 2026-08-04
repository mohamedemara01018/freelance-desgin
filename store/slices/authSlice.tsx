/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "@/services/user.service";
import { RootState } from "../store";

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    avatar?: string;
}

interface AuthState {
    me: IUser | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    me: null,
    isLoading: false,
    error: null,
};

export const fetchMe = createAsyncThunk<
    { user: IUser },
    void,
    { rejectValue: string }
>(
    "auth/fetchMe",
    async (_, { rejectWithValue }) => {
        try {
            const data = await userService.me();

            // If your service returns { data: user }
            return data.data;

            // If it returns the user directly, use:
            // return data;
        } catch (error: any) {
            return rejectWithValue(
                error?.response?.data?.message || "Failed to fetch user."
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuth(state) {
            state.me = null;
            state.error = null;
        },

        clearAuthError(state) {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMe.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            .addCase(fetchMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.me = action.payload.user;
            })

            .addCase(fetchMe.rejected, (state, action) => {
                state.isLoading = false;
                state.me = null;
                state.error =
                    action.payload ?? "Something went wrong.";
            });
    },
});

export const { clearAuth, clearAuthError } = authSlice.actions;
export const selectMeSlice = (state: RootState) => state.authSlice.me
export default authSlice.reducer;