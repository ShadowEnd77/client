import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { AUTH_PATHS } from "../../../api/paths";
import { UserRegisterReq, UserRegisterRes } from "../../../types/api/user.api.types";
import { GetSurveysReq, GetSurveysRes } from "../../../types/api/survey.api.types";
import { сonvertDataToGetParams } from "../../../utils/convertToQueryParams";

export class SurveyApi {
    static async getAll() {
        const res: AxiosResponse<GetSurveysRes> = await api.get(`${AUTH_PATHS.GET_SURVEYS}`)
        if (!res.data) throw res;
        
        return res
    }
}