import { ResponseStatus } from "../../../types/common/utilitarian.types"
import { User } from "../../../types/entities"

type UserSliceState = {
    token: boolean | null
    data: User
    form: Omit<User, "uuid">
    register: ResponseStatus
}

export const defaultUserData: User = {
    age: 0,
    first_name: "",
    last_name: "",
    middle_name: "",
    gender: 0,
    city_id: 0,
    school_id: 0,
    uuid: ""
}

export const initialUserState: UserSliceState = {
    token: null,
    data: {
        ...defaultUserData,
        uuid: ''
    },
    form: defaultUserData,
    register: {
        loading: false,
        error: "",
        success: null
    }

}
