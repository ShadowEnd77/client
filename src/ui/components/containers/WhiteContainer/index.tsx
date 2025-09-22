import { FC } from 'react'
import styles from './whiteContainer.module.scss'
import { HasChildren, HasClassName } from '../../../../types/common/utilitarian.types'
import { motion } from "motion/react"

type WhiteContainerProps = HasChildren & HasClassName

export const WhiteContainer: FC<WhiteContainerProps> = ({
    children,
    className
}) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`${styles.block} ${className || ""}`}>
            {children}
        </motion.section>
    )
}
