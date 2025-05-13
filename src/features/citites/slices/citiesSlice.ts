import { createSlice } from "@reduxjs/toolkit"
import { City } from "../../../types/entities"

type CititesSliceState = {
    items: City[]
}

const initialState: CititesSliceState = {
    items: []
}

const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
    }
})

export const cititesReducer = citiesSlice.reducer