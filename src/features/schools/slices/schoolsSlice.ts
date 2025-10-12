import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { School } from "../../../types/entities"
import { GetSchoolsReq, GetSchoolsRes } from "../../../types/api/schools.api.types"
import { HasPagination, HasResponseStatus } from "../../../types/common/utilitarian.types"
import { USER_STRINGS } from "../../user/config"
import { CONFIG } from "../../../config"
import { SchoolsApi } from "../api/schools.api"

type SchoolsSliceState = {
    items: School[]
} & HasPagination & HasResponseStatus

const initialState: SchoolsSliceState = {
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

export const getSchools = createAsyncThunk(
    'schools/get',
    async (req: GetSchoolsReq) => {

        if (CONFIG.USE_MOCK_API) {
            return new Promise<GetSchoolsRes>((rs, _) => {
                setTimeout(() => {
                    rs(req.skip == 0 ? [
                        { id: 1, name: "СОШ №1" },
                        { id: 2, name: "СОШ №2" },
                        { id: 3, name: "СОШ №3" },
                        { id: 4, name: "СОШ №4" },
                        { id: 5, name: "СОШ №5" },
                        { id: 6, name: "СОШ №6" },
                        { id: 7, name: "СОШ №7" },
                        { id: 8, name: "СОШ №8" },
                        { id: 9, name: "СОШ №9" },
                        { id: 10, name: "ОЦ №11" }
                    ] : [])
                }, CONFIG.MOCK_FETCH_DELAY)
            })
        }
    const res: GetSchoolsRes = await SchoolsApi.getAll(req);

        if (!res) {
            throw new Error("Empty response")
        }

        return res;

    },
)

const schoolsSlice = createSlice({
    name: "schools",
    initialState,
    reducers: {
        resetSchoolPagination: state => {
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
            .addCase(getSchools.pending, state => {
                if (state.pagination.part > 1) {
                    state.pagination.loading = true
                    return
                }
                state.statuses.loading = true
                state.items = []
            })
            .addCase(getSchools.fulfilled, (state, action: PayloadAction<GetSchoolsRes>) => {
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
            .addCase(getSchools.rejected, state => {
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
export const { resetSchoolPagination } = schoolsSlice.actions
export const schoolsReducer = schoolsSlice.reducer