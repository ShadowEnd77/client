import { AxiosResponse } from "axios";
import { api } from "../../../api/instance";
import { API_PATHS } from "../../../api/paths";
import { UserRegisterReq, UserRegisterRes } from "../../../types/api/user.api.types";

export class UserApi {
    static async register(req: UserRegisterReq) {
        const res: AxiosResponse<UserRegisterRes> = await api.post(API_PATHS.REGISTER, req)
        if (!res.data) throw res;
        
        return res
    }
}