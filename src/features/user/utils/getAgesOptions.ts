import { SelectFieldOption } from "../../../ui/components/forms/SelectField/selectField.types"

export const getAgesOptions = (age_min: number, age_max: number) => {
    const result: SelectFieldOption[] = []

    for (let i = age_min; i < age_max; i++) {
        result.push({
            value: i,
            label: `${i} лет`
        })
    }

    return result
}