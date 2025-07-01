import React, { Attributes, FC, FocusEvent, FocusEventHandler, HTMLAttributes, InputHTMLAttributes, useState } from 'react'
import styles from './inputField.module.scss'

type InputFieldProps<NameType> = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
    name?: NameType
}

export const InputField = <NameType,>(props: InputFieldProps<NameType>) => {
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
                ${isFocused ? styles.focused : ""}
                ${props.value ? styles.hasValue: ""}
                ${props.error ? styles.error : ""}
                ${props.disabled ? styles.disabled : ""}
                `}
            htmlFor={props.id}
        >
            <input
                {...props}
                name={props.name}
                onFocus={onFocus}
                onBlur={onBlur}
                className={`${props.className} ${styles.input}`}
            />
        </label>


    )
}
