import { SendSurveyReq } from "../../../types/api/survey.api.typs"
import { ResponseStatus } from "../../../types/common/utilitarian.types"
import { SurveyAnswers, SurveyQuestion } from "../../../types/entities"

type SurveySliceState = {
    available_answers: SurveyAnswers
    questions: {
        items: SurveyQuestion[]
        statuses: ResponseStatus
    }
    data: SendSurveyReq;
    current_question_id: number
}


export const initialSurveyState: SurveySliceState = {
    available_answers: {},
    questions: {
        items: [],
        statuses: {
            success: null,
            error: "",
            loading: false
        }
    },
    data: {},
    current_question_id: 0
}
