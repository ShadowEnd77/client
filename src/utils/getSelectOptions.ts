import { SelectFieldOption } from "../ui/components/forms/SelectField/selectField.types"

export const getSelectOptions = <ListElementType>(
    items: ListElementType[],
    valueKey: keyof ListElementType,
    labelKey: keyof ListElementType
): SelectFieldOption[] => {
    return items.map((element) => ({
        value: Number(element[valueKey]),
        label: String(element[labelKey])
    }))
}