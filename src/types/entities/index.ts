import { HasId, HasName, HasText } from "../common/utilitarian.types"

// USER ENTITIES
export type User = {
    uuid: string
    first_name: string
    last_name: string
    age: number
    city_id: number
    school: string
}

// CITIES ENTITIES
export type City = HasId & HasName

// SURVIES ENTITIES
// export type SurveyQuestion = {
//     text: string
// } & HasId

// export type SurveyAnswer = 0 | 1
// export type SurveyAnswers = Record<SurveyAnswer, string>

export type Survey = {
    title: string;
    questions: Question[];
} & HasId

export type Question = {
    options: Answer[];
} & HasId & HasText;

export type Answer = {
    order: number;
} & HasId & HasText;

export type ResultAnswer = {
    question_id: number,
    answer_option_id: number
}