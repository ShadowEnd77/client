import { HasId, HasName } from "../common/utilitarian.types"

export type User = {
    uuid: string
    first_name: string
    last_name: string
    age: number
    city_id: number
    school: string
}

export type City = HasId & HasName

export type SurveyQuestion = {
    text: string
} & HasId

export type SurveyAnswer = 0 | 1
export type SurveyAnswers = Record<SurveyAnswer, string>