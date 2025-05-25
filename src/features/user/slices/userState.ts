import { ResponseStatus } from "../../../types/common/utilitarian.types"
import { User } from "../../../types/entities"

type UserSliceState = {
    token: boolean
    data: User
    form: Omit<User, "uuid">
    register: ResponseStatus
}

const defaultUserData: Omit<User, "uuid"> = {
    age: 0,
    first_name: "",
    last_name: "",
    city_id: 0,
    school: ""
}

export const initialUserState: UserSliceState = {
    token: false,
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
