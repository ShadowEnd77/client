import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../features/user/slices/userSlice'
import { citiesReducer } from '../features/cities/slices/citiesSlice'
import { surveyReducer } from '../features/survey/slices/surveySlice'
import { gameInfoReducer } from '../features/game/slices/game-info/gameInfoSlice'
import { settingsReducer } from '../features/settings/slices/settingsSlice'
import { popupReducer } from '../features/settings/slices/popupSlice'
import { schoolsReducer } from '../features/schools/slices/schoolsSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        cities: citiesReducer,
        schools: schoolsReducer,
        survey: surveyReducer,
        game: gameInfoReducer,
        settings: settingsReducer,
        popup: popupReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 