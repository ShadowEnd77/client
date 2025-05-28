import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.scss'
import { Loader } from '../../service/Loader'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean
    classNames?: {
        button?: string
        content?: string
    }
}

export const Button: FC<ButtonProps> = ({ children, isLoading, type = "button", ...props }) => {
    return (
        <button
            {...props}
            disabled={props.disabled || isLoading}
            type={type}
            className={`${styles.button} ${props.classNames?.button || ""}`}>
            <div className={`${styles.content} ${props.classNames?.content || ""}}`}>
                {children}
                {
                    isLoading ? <Loader height={16} width={16} /> : null
                }
            </div>
        </button >
    )
}
