import { SelectFieldOption } from "../../../ui/components/forms/SelectField/selectField.types"
import { getAgesOptions } from "../utils/getAgesOptions"

const AGE_MIN = 7
const AGE_MAX = 15

export const STATIC_DATA = {
    AGES_OPTIONS: getAgesOptions(AGE_MIN, AGE_MAX),
    GENDER_OPTIONS: [
        {
            value: 1,
            label: "Мужской"
        },
        {
            value: 2,
            label: "Женский"
        }
    ] as SelectFieldOption[]
}

export const USER_STRINGS = {
    REGISTRATION_ERROR: "Не удалось зарегистрироваться!"
}