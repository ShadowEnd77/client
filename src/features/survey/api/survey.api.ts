import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { API_PATHS } from "../../../api/paths";
import { GetSurveysReq, GetSurveysRes, SendSurveyReq, SendSurveyRes } from "../../../types/api/survey.api.types";
import { convertToQueryParams } from "../../../utils/convertToQueryParams";

export class SurveyApi {
    static async getAll(req: GetSurveysReq) {
        const res: AxiosResponse<GetSurveysRes> = await api.get(`${API_PATHS.GET_SURVEYS}${convertToQueryParams(req)}`)
        if (!res.data) throw res;

        return res.data
    }
    static async sendAnswers(req: SendSurveyReq) {
        console.log('SurveyApi.sendAnswers payload:', req); // доб
        const res: AxiosResponse<SendSurveyRes> = await api.post(`${API_PATHS.SUBMIT_SURVEY}`, req)
        if (!res.data) throw res;

        return res.data
    }
}