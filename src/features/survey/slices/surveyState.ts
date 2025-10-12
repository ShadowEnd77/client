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
    // When true, UI should enter a mode that allows the user to choose/play any game
    allow_game_selection?: boolean
    suggested_game: number
    lie_detected?: boolean
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
    survey_passed: false,
    allow_game_selection: false,
    suggested_game: 1
    ,lie_detected: false
}
