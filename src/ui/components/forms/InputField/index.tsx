import React, { Attributes, FC, FocusEvent, FocusEventHandler, HTMLAttributes, InputHTMLAttributes, useState } from 'react'
import styles from './inputField.module.scss'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
}

export const InputField: FC<InputFieldProps> = ({ ...props }) => {
    const [isFocused, setIsFocused] = useState(false)

    const onFocus = (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true)

        if (props.onFocus) {
            props.onFocus(e)
        }
    }

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false)

        if (props.onBlur) {
            props.onBlur(e)
        }
    }

    return (
        <label
            className={`
                ${styles.wrapper} 
                ${isFocused || props.value ? styles.focused : ""}
                ${props.error ? styles.error : ""}
                ${props.disabled ? styles.disabled : ""}
                `}
            htmlFor={props.id}
        >
            <input
                {...props}
                onFocus={onFocus}
                onBlur={onBlur}
                className={`${props.className} ${styles.input}`}
            />
        </label>


    )
}
