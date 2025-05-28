import { SendSurveyReq } from "../../../types/api/survey.api.types"
import { ResponseStatus } from "../../../types/common/utilitarian.types"
import { SurveyAnswers, SurveyQuestion } from "../../../types/entities"

type SurveySliceState = {
    available_answers: SurveyAnswers
    questions: {
        items: SurveyQuestion[]
        statuses: ResponseStatus
    }
    sending_statuses: ResponseStatus
    data: SendSurveyReq;
    current_question_id: number
    answered_count: number
    test_passed: boolean
}


export const initialSurveyState: SurveySliceState = {
    available_answers: {
        0: "",
        1: ""
    },
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
    data: {},
    current_question_id: 0,
    answered_count: 0,
    test_passed: false
}
