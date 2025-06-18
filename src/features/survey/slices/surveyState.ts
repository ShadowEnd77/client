import { HasId, ResponseStatus } from "../../../types/common/utilitarian.types"
import { Question, ResultAnswer } from "../../../types/entities"

type SurveySliceState = {
    title: string
    questions: {
        items: Question[]
        statuses: ResponseStatus
    }
    answers_data: ResultAnswer[];
    current_question_id: number
    sending_statuses: ResponseStatus
    survey_passed: boolean
} & HasId


export const initialSurveyState: SurveySliceState = {
    id: 0,
    title: "",
    questions: {
        items: [],
        statuses: {
            success: null,
            error: "",
            loading: false
        }
    },
    sending_statuses: {
        success: null,
        error: "",
        loading: false
    },
    answers_data: [],
    current_question_id: 0,
    survey_passed: false
}
