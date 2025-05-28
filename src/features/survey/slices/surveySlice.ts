import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialSurveyState } from './surveyState'
import { GetSurveyReq, GetSurveyRes } from '../../../types/api/survey.api.types'
import { SurveyAnswer } from '../../../types/entities'

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
                        },
                        {
                            id: 4,
                            text: "Знаете ли вы Пашу Коробова 1?"
                        },
                        {
                            id: 5,
                            text: "Знаете ли вы Пашу Коробова 2?"
                        },
                        {
                            id: 6,
                            text: "Знаете ли вы Пашу Коробова 3?"
                        },
                        {
                            id: 7,
                            text: "Знаете ли вы Пашу Коробова 1?"
                        },
                        {
                            id: 8,
                            text: "Знаете ли вы Пашу Коробова 2?"
                        },
                        {
                            id: 9,
                            text: "Знаете ли вы Пашу Коробова 3?"
                        }

                    ]
                })
            }, 1500)
        })
        // const res: AxiosResponse<UserRegisterRes> = await UserApi.register(req);

        // if (!res.data) {
        //     throw res;
        // }

        // storeToken(res.data.access_token);

        // return res.data;
    },
)

export const sendSurvey = createAsyncThunk(
    'survey/send',
    async (req: GetSurveyReq) => {
        return new Promise<any>((rs) => {
            setTimeout(() => {
                rs(req)
            }, 1000)
        })
    },
)

export const surveySlice = createSlice({
    name: 'survey',
    initialState: initialSurveyState,
    reducers: {
        answerTheQuestion: (state, action: PayloadAction<SurveyAnswer>) => {
            state.data[state.current_question_id] = action.payload
            const questionsLength = state.questions.items.length
            state.answered_count += 1

            if (state.answered_count == questionsLength) {
                state.test_passed = true;
                return;
            }
            if (state.answered_count < questionsLength) {
                state.current_question_id = state.questions.items[state.answered_count].id;
                return;
            }
        }
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
                state.current_question_id = action.payload.questions[0].id
                state.questions.statuses = {
                    loading: false,
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
            .addCase(sendSurvey.pending, state => {
                state.sending_statuses = {
                    success: null,
                    loading: true,
                    error: ""
                }
            })
            .addCase(sendSurvey.fulfilled, state => {
                state.sending_statuses = {
                    success: true,
                    loading: false,
                    error: state.sending_statuses.error
                }
            })
            .addCase(sendSurvey.rejected, state => {
                state.sending_statuses = {
                    success: false,
                    loading: false,
                    error: "Не удалось отправить ответы тестирования"
                }
            })
    },
})

export const {
    answerTheQuestion
} = surveySlice.actions

export const surveyReducer = surveySlice.reducer