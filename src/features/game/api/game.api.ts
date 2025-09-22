import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { API_PATHS } from "../../../api/paths";
import { FinishGameReq, FinishGameRes, GetGameInfoByIdReq, GetGameInfoByIdRes } from "../../../types/api/game.api.types";
import { convertToQueryParams } from "../../../utils/convertToQueryParams.ts";

export class GameApi {
    static async getById(req: GetGameInfoByIdReq) {
        const reqData: Omit<GetGameInfoByIdReq, "id"> = { ...req }
        const res: AxiosResponse<GetGameInfoByIdRes> = await api.get(`${API_PATHS.GET_GAMES}/${req.id}${convertToQueryParams(reqData)}`)

        if (!res.data) throw res;

        return res
    }

    static async finishGame(req: FinishGameReq) {
        const res: AxiosResponse<FinishGameRes> = await api.post(`${API_PATHS.FINISH_GAME}`, req)

        if (!res.data) throw res;

        return res
    }
}