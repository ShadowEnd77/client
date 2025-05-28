import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialSurveyState } from './surveyState'
import { GetSurveyReq, GetSurveyRes } from '../../../types/api/survey.api.typs'

export const getSurvey = createAsyncThunk(
    'survey/get',
    async (req: GetSurveyReq) => {
        return new Promise<GetSurveyRes>((rs, _) => {
            setTimeout(() => {
                rs({
                    answers: {
                        0: "Нет",
                        1: "Да"
                    },
                    questions: [
                        {
                            id: 1,
                            text: "Знаете ли вы Пашу Коробова 1?"
                        },
                        {
                            id: 2,
                            text: "Знаете ли вы Пашу Коробова 2?"
                        },
                        {
                            id: 3,
                            text: "Знаете ли вы Пашу Коробова 3?"
                        }

                    ]
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

export const surveySlice = createSlice({
    name: 'survey',
    initialState: initialSurveyState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(getSurvey.pending, state => {
                state.questions.statuses = {
                    loading: true,
                    success: false,
                    error: ""
                }
            })
            .addCase(getSurvey.fulfilled, (state, action: PayloadAction<GetSurveyRes>) => {
                state.questions.items = action.payload.questions
                state.available_answers = action.payload.answers
                state.questions.statuses = {
                    loading: true,
                    success: false,
                    error: state.questions.statuses.error
                }
            })
            .addCase(getSurvey.rejected, state => {
                state.questions.statuses = {
                    loading: false,
                    success: false,
                    error: "Возникла ошибка получения опроса"
                }
            })
    },
})

export const {

} = surveySlice.actions

export const surveyReducer = surveySlice.reducer