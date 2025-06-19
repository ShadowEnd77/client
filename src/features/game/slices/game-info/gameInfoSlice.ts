import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialGameInfoState } from './gameInfoState'
import { GetGameInfoByIdReq, GetGameInfoByIdRes } from '../../../../types/api/game.api.types'

export const getGameInfoById = createAsyncThunk(
    'game/get-by-id',
    async (req: GetGameInfoByIdReq) => {
        return new Promise<GetGameInfoByIdRes>((rs, _) => {
            setTimeout(() => {
                rs({
                    game: {
                        id: 1,
                        cover: "",
                        duration: 5,
                        title: "Игра такая-то",
                        description: "Описание большое большое Описание большое большое Описание большое большое Описание большое большое Описание большое большое Описание большое большое "
                    }
                })
            }, 3000)
        })
        // const res: AxiosResponse<UserRegisterRes> = await UserApi.register(req);

        // if (!res.data) {
        //     throw res;
        // }

        // storeToken(res.data.access_token);

        // return res.data;
    },
)

export const gameInfoSlice = createSlice({
    name: 'game-info',
    initialState: initialGameInfoState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getGameInfoById.pending, state => {
                state.statuses.loading = true
                state.statuses.error = ""
            })
            .addCase(getGameInfoById.fulfilled, (state, action: PayloadAction<GetGameInfoByIdRes>) => {
                state.data = action.payload.game
                state.statuses.loading = false
                state.statuses.success = true
            })
            .addCase(getGameInfoById.rejected, state => {
                state.statuses.loading = false
                state.statuses.error = ""
            })
    },
})

export const {

} = gameInfoSlice.actions

export const gameInfoReducer = gameInfoSlice.reducer