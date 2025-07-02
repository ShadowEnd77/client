import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SettingsSliceState = {
    full_screen_mode: boolean;
    audio_muted: boolean;
    visual_impaired_mode: boolean;
}

const initialState: SettingsSliceState = {
    full_screen_mode: false,
    audio_muted: false,
    visual_impaired_mode: !false
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleFullScreenMode: (state) => {
            state.full_screen_mode = !state.full_screen_mode;
        },
        toggleAudioMuted: (state) => {
            state.audio_muted = !state.audio_muted;
        },
        toggleVisualImpairedMode: (state) => {
            state.visual_impaired_mode = !state.visual_impaired_mode;
        },
        setFullScreenMode: (state, action: PayloadAction<boolean>) => {
            state.full_screen_mode = action.payload;
        },
        setAudioMuted: (state, action: PayloadAction<boolean>) => {
            state.audio_muted = action.payload;
        },
        setVisualImpairedMode: (state, action: PayloadAction<boolean>) => {
            state.visual_impaired_mode = action.payload;
        },
        resetSettings: () => initialState
    }
});

export const {
    toggleFullScreenMode,
    toggleAudioMuted,
    toggleVisualImpairedMode,
    setFullScreenMode,
    setAudioMuted,
    setVisualImpairedMode,
    resetSettings
} = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;