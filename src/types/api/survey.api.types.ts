import { ResultAnswer, Survey } from "../entities"

export type GetSurveysReq = {
    skip?: number;  // Количество пропускаемых записей (по умолчанию 0)
    limit?: number;  // Лимит записей (по умолчанию 10)
};

// Типы для ответа опросов
export type GetSurveysRes = {
    surveys: Survey[];
};

export type SendSurveyReq = {   
    survey_id: number
    user_id: string
    answers: ResultAnswer[]
}

export type SendSurveyResponse = any