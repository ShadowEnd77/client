import React, { Attributes, FC, HTMLAttributes, InputHTMLAttributes } from 'react'
import styles from './inputField.module.scss'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

export const InputField: FC<InputFieldProps> = ({ type = "text", ...props }) => {
    return (
        <input
            {...props}
            className={`${props.className} ${styles.input}`}
            type={type}
        />

    )
}
