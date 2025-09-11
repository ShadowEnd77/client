import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PopupState = {
    is_open: boolean;
    message: string;
    is_error: boolean
}

const initialState: PopupState = {
    is_open: false,
    message: '',
    is_error: false
};

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<{ text: string, is_error?: boolean }>) => {
            state.is_open = true;
            state.message = action.payload.text;
            state.is_error = Boolean(action.payload.is_error);
        },
        closePopup: (state) => {
            state.is_open = false;
            state.message = '';
            state.is_error = false
        },
    },
});

export const { openPopup, closePopup } = popupSlice.actions;
export const popupReducer = popupSlice.reducer;