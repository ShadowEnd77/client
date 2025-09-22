import { FC } from 'react'
import { Button, ButtonProps } from '../Button'
import styles from './controlButton.module.scss'

export const ControlButton: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <Button classNames={{button: `${styles.controlButton} ${props.classNames?.button}`}} {...props}>
            {children}
        </Button>
    )
}
