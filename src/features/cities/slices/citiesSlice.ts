import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { City } from "../../../types/entities"
import { GetCitiesReq, GetCitiesRes } from "../../../types/api/cities.api.types"
import { HasPagination, HasResponseStatus } from "../../../types/common/utilitarian.types"
import { USER_STRINGS } from "../../user/config"
import { CONFIG } from "../../../config"
import { CitiesApi } from "../api/cities.api"
import { AxiosResponse } from "axios"

type CitiesSliceState = {
    items: City[]
} & HasPagination & HasResponseStatus

const initialState: CitiesSliceState = {
    items: [],
    pagination: {
        loading: false,
        part: 1,
        is_out: false,
        limit: 20
    },
    statuses: {
        loading: false,
        success: null,
        error: ""
    }
}

export const getCities = createAsyncThunk(
    'cities/get',
    async (req: GetCitiesReq) => {

        if (CONFIG.USE_MOCK_API) {
            return new Promise<GetCitiesRes>((rs, _) => {
                setTimeout(() => {
                    rs({cities: req.skip == 0 ? [
                        { id: 1, name: "Череповец" },
                        { id: 2, name: "Вологда" },
                        { id: 3, name: "Москва" },
                        { id: 4, name: "Санкт-Петербург" },
                        { id: 5, name: "Новосибирск" },
                        { id: 6, name: "Екатеринбург" },
                        { id: 7, name: "Казань" },
                        { id: 8, name: "Нижний Новгород" },
                        { id: 9, name: "Краснодар" },
                        { id: 10, name: "Сочи" }
                    ] : []
                })
                }, CONFIG.MOCK_FETCH_DELAY)
            })
        }
        const res: AxiosResponse<GetCitiesRes> = await CitiesApi.getAll(req);

        if (!res.data) {
            throw res;
        }
        //return res.data;
    return { cities: res.data.cities ?? res.data };

    },
)

const citiesSlice = createSlice({
    name: "cities",
    initialState,
    reducers: {
        resetPagination: state => {
            state.pagination = {
                loading: false,
                part: 1,
                is_out: false,
                limit: 20
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getCities.pending, state => {
                if (state.pagination.part > 1) {
                    state.pagination.loading = true
                    return
                }
                state.statuses.loading = true
                state.items = []
            })
            .addCase(getCities.fulfilled, (state, action: PayloadAction<GetCitiesRes>) => {
                const cities = action.payload.cities;
                const isEmpty = cities.length === 0;

                state.items = [...state.items, ...cities];
                state.statuses.success = true;
                state.pagination.loading = false;
                state.statuses.loading = false;

                state.pagination.is_out = isEmpty;

                if (!isEmpty && (cities.length < state.pagination.limit)) {
                    state.pagination.is_out = true;
                }

                if (!isEmpty) {
                    state.pagination.part += 1;
                }
            })
            .addCase(getCities.rejected, state => {
                if (state.pagination.loading) {
                    state.pagination.loading = false
                }
                if (state.statuses.loading) {
                    state.statuses.loading = false
                }

                state.statuses.loading = false
                state.statuses.success = false
                state.statuses.error = USER_STRINGS.REGISTRATION_ERROR

            })
    },
})
export const { resetPagination } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer