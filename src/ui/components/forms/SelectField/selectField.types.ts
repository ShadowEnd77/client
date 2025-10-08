import { ChangeEvent } from "react"
import { HasClassName } from "../../../../types/common/utilitarian.types"

export type SelectFieldOption = {
    label: string
    value: number
}

export type SelectAsyncOptions = {
    is_loading?: boolean
    is_pag_loading?: boolean
    limit?: number
    disableObserving?: boolean
    part: number,
    onLoad: () => void
}

export type SelectFieldProps = {
    htmlId: string;
    selectedValue: number
    readOnly?: boolean,
    placeholder?: string
    value?: string
    options: SelectFieldOption[]
    asyncOptions?: SelectAsyncOptions
    onSearch?: (e: ChangeEvent<HTMLInputElement>) => void
    onChange?: (value: number, label: string) => void
    disabled?: boolean
} & HasClassName