import { FC } from 'react'
import styles from './whiteContainer.module.scss'
import { HasChildren, HasClassName } from '../../../../types/common/utilitarian.types'

type WhiteContainerProps = HasChildren & HasClassName

export const WhiteContainer: FC<WhiteContainerProps> = ({
    children,
    className
}) => {
    return (
        <section className={`${styles.block} ${className || ""}`}>
            {children}
        </section>
    )
}
