import { getAgesOptions } from "../utils/getAgesOptions"

const AGE_MIN = 7
const AGE_MAX = 15

export const STATIC_DATA = {
    AGES_OPTIONS: getAgesOptions(AGE_MIN, AGE_MAX)
}

export const USER_STRINGS = {
    REGISTRATION_ERROR: "Не удалось зарегистрироваться!"
}