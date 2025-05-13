import { SecureData } from "../common/specials.types";
import { User } from "../entities";

export type UserRegisterReq = Omit<User, "id"> & SecureData
export type UserRegisterRes = {
    uuid: string
    access_token: string
}

