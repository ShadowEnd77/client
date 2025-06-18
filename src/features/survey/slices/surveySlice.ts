import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialSurveyState } from './surveyState'
import { SendSurveyReq } from '../../../types/api/survey.api.types'
import { Answer, Survey } from '../../../types/entities'
import { mockSurveys } from '../utils/mock-data/surveys.mock'

export const getSurvey = createAsyncThunk(
    'survey/get',
    async () => {
        return new Promise<Survey>((rs, _) => {
            setTimeout(() => {
                rs(mockSurveys.surveys[0])
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
    async (req: SendSurveyReq) => {
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
        answerTheQuestion: (state, action: PayloadAction<Answer>) => {
            // Answer the current question 
            state.answers_data = [
                ...state.answers_data,
                {
                    answer_option_id: action.payload.id,
                    question_id: state.current_question_id
                }
            ]

            const questionsLength = state.questions.items.length
            const answeredCount = state.answers_data.length

            // Survey passed (finished)
            if (answeredCount == questionsLength) {
                state.survey_passed = true;
                return;
            }

            // Survey next question
            if (answeredCount < questionsLength) {
                state.current_question_id = state.questions.items[answeredCount].id;
                return;
            }
        }
    },
    extraReducers(builder) {
        builder
            // Get survey
            .addCase(getSurvey.pending, state => {
                state.questions.statuses = {
                    loading: true,
                    success: false,
                    error: ""
                }
            })
            .addCase(getSurvey.fulfilled, (state, action: PayloadAction<Survey>) => {
                state.questions.items = action.payload.questions
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

            // Send survey
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