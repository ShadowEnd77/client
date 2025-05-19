import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
}

export const Button: FC<ButtonProps> = ({ children, type = "button", ...props }) => {
    return (
        <button {...props} type={type} className={`${styles.button}`}>{children}</button>
    )
}
