import { createSlice } from '@reduxjs/toolkit';

import {getAllUsers} from './operation';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
state.isLoading = false;
state.error = action.payload;
}


const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        error: null,
        data: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, handlePending)
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.data = action.payload;
            })
            .addCase(getAllUsers.rejected, handleRejected);
    }
});

export const userReducer = usersSlice.reducer;