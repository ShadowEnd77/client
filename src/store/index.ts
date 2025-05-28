import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../features/user/slices/userSlice'
import { citiesReducer } from '../features/citites/slices/citiesSlice'
import { surveyReducer } from '../features/survey/slices/surveySlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cities: citiesReducer,
        survey: surveyReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 