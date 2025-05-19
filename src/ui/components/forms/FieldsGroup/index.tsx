import { FC, ReactNode } from 'react'
import { HasChildren } from '../../../../types/common/utilitarian.types'
import styles from './fieldGroup.module.scss'

type FieldsGroupClassnames = {
    legend?: string
    body?: string
    block?: string
}

type FieldsGroupProps = {
    legendChildren: ReactNode
    classNames?: FieldsGroupClassnames
    requiredStyle?: boolean
} & HasChildren

export const FieldsGroup: FC<FieldsGroupProps> = ({
    children,
    legendChildren,
    classNames,
    requiredStyle = true
}) => {

    return (
        <fieldset className={`${styles.block} ${classNames?.block || ""}`}>
            <legend className={`${styles.legend} ${classNames?.legend || ""}`}>
                {legendChildren}
                {
                    requiredStyle ? <div className={styles.requiredSymbol}>*</div> : null
                }
            </legend>
            <div className={`${styles.body} ${classNames?.body || ""}`}>{children}</div>
        </fieldset>
    )
}
