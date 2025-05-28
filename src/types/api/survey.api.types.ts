import { SurveyAnswer, SurveyAnswers, SurveyQuestion } from "../entities"

export type GetSurveyReq = any
export type GetSurveyRes = {
    answers: SurveyAnswers
    questions: SurveyQuestion[]
}

export type SendSurveyReq = Record<number, SurveyAnswer>