import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.scss'
import { Loader } from '../../service/Loader'

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    isLoading?: boolean
    classNames?: {
        button?: string
        content?: string
    }
}

export const Button: FC<ButtonProps> = ({ children, classNames, isLoading, type = "button", ...props }) => {
    return (
        <button
            {...props}
            disabled={props.disabled || isLoading}
            type={type}
            className={`${styles.button} ${classNames?.button || ""}`}>
            <div className={`${styles.content} ${classNames?.content || ""}}`}>
                {children}
                {
                    isLoading ? <Loader height={16} width={16} /> : null
                }
            </div>
        </button >
    )
}
