import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { City } from "../../../types/entities"
import { GetCitiesReq, GetCitiesRes } from "../../../types/api/cities.api.types"
import { HasPagination, HasResponseStatus } from "../../../types/common/utilitarian.types"
import { USER_STRINGS } from "../../user/config"

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
        // const res: AxiosResponse<UserRegisterRes> = await UserApi.register(req);

        // if (!res.data) {
        //     throw res;
        // }

        // storeToken(res.data.access_token);

        // return res.data;
        console.log('Должны', req);

        return new Promise<GetCitiesRes>((rs, _) => {
            setTimeout(() => {
                // rs(Array(20).fill(null).map((_, index) => {
                //     return {
                //         id: index + 1,
                //         name: `City label ${index + 1}`
                //     }
                // }))
                rs(req.skip == 0 ? [
                    { id: 1, name: "Череповец 1" }
                ] : [])
            }, 1000)
        })
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
                const isEmpty = action.payload.length == 0

                state.items = [...state.items, ...action.payload]
                state.statuses.success = true
                state.pagination.loading = false
                state.statuses.loading = false

                state.pagination.is_out = isEmpty

                if (!isEmpty && (action.payload.length < state.pagination.limit)) {
                    state.pagination.is_out = true
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