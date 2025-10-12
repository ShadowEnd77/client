import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialSurveyState } from './surveyState'
import { SendSurveyReq, SendSurveyRes } from '../../../types/api/survey.api.types'
import { Answer, Survey } from '../../../types/entities'
import { mockSurveys } from '../utils/mock-data/surveys.mock'
import { CONFIG } from '../../../config'
import { SurveyApi } from '../api/survey.api'

export const getSurvey = createAsyncThunk(
    'survey/get',
    async () => {
        if (CONFIG.USE_MOCK_API) {
            return new Promise<Survey>((rs) => {
                setTimeout(() => {
                    rs(mockSurveys.surveys[0])
                }, CONFIG.MOCK_FETCH_DELAY)
            })
        } else {
            const res = await SurveyApi.getAll({});
            return res.surveys[0];
        }
    },
)

export const sendSurvey = createAsyncThunk(
    'survey/send',
    async (req: SendSurveyReq & { suggested_game?: number }) => {
        if (CONFIG.USE_MOCK_API) {
            return new Promise<SendSurveyRes>((rs) => {
                setTimeout(() => {
                    rs({
                        suggested_game: req.suggested_game ?? 1
                    })
                }, CONFIG.MOCK_FETCH_DELAY)
            })
        }

        const res = await SurveyApi.sendAnswers(req);

        return res
    },
)

export const surveySlice = createSlice({
    name: 'survey',
    initialState: initialSurveyState,
    reducers: {
        resetSendingSurveyStatus: (state) => {
            state.sending_statuses = {
                error: "",
                success: null,
                loading: false
            }
        },
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
        },
        // <--- ДОБАВЛЕНО: Новый редьюсер для сброса опроса
        resetSurvey: (state) => {
            state.answers_data = [];
            // Reset survey passed flag so UI doesn't immediately go to submit state
            state.survey_passed = false;
            state.allow_game_selection = false;
            // reset suggested game / lie flag for next run
            state.suggested_game = initialSurveyState.suggested_game;
            state.lie_detected = initialSurveyState.lie_detected;
            state.sending_statuses = initialSurveyState.sending_statuses;

            // Возвращаем итератор к первому вопросу, если вопросы загружены
            if (state.questions.items.length > 0) {
                state.current_question_id = state.questions.items[0].id;
            } else {
                state.current_question_id = initialSurveyState.current_question_id;
            }
        }
        ,
        setAllowGameSelection: (state, action: PayloadAction<boolean>) => {
            state.allow_game_selection = action.payload;
        },
        setSurveyPassed: (state, action: PayloadAction<boolean>) => {
            state.survey_passed = action.payload;
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
                state.title = action.payload.title
                state.id = action.payload.id
                state.questions.statuses = {
                    loading: false,
                    success: true,
                    error: ""
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
            .addCase(sendSurvey.fulfilled, (state, action: PayloadAction<SendSurveyRes>) => {
                state.suggested_game = action.payload.suggested_game
                state.lie_detected = !!action.payload.lie_detected
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
    resetSendingSurveyStatus,
    answerTheQuestion,
    resetSurvey, // <--- ДОБАВЛЕНО: Экспортируем новое действие
    setAllowGameSelection,
    setSurveyPassed
} = surveySlice.actions

export const surveyReducer = surveySlice.reducer