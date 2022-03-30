import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPos: ''
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setCurrentPos: (state, action) => {
            state.currentPos = action.payload;
        }
    }
});

export const { setCurrentPos } = headerSlice.actions;

export const getCurrentPos = (state) => state.header.currentPos;

export default headerSlice.reducer;