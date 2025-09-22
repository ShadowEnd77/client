import { memo } from 'react'
import { tickIcon } from '../../../icons'
import { SelectFieldOption } from './selectField.types'
import styles from './selectField.module.scss'

export type SelectOptionProps = {
    selectedValue: number
    onSelect: () => void
} & SelectFieldOption

export const SelectOption = memo(({
    selectedValue,
    value,
    label,
    onSelect
}: SelectOptionProps) => {
    return (
        <li onClick={onSelect} className={styles.option}>
            <span>{label}</span>
            {selectedValue === value && <img src={tickIcon} height={8} width={12} alt="" />}
        </li>
    )
})
