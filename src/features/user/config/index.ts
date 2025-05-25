import { SelectFieldOption } from "../../../ui/components/forms/SelectField/selectField.types"

const AGE_MIN = 7
const AGE_MAX = 15

const getAgesOptions = (age_min: number, age_max: number) => {
    const result: SelectFieldOption[] = []

    for (let i = age_min; i < age_max; i++) {
        result.push({
            value: i,
            label: `${i} лет`
        })
    }

    return result
}

export const STATIC_DATA = {
    AGES_OPTIONS: getAgesOptions(AGE_MIN, AGE_MAX)
}

export const USER_STRINGS = {
    REGISTRATION_ERROR: "Не удалось зарегистрироваться!"
}