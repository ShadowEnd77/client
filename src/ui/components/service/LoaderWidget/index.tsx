import React, { FC } from 'react'
import styles from './loaderWidget.module.scss'
import { Loader } from '../Loader'

type LoaderWidgetProps = {
    widthLoader: number
    heightLoader: number
    text: string
    className?: string
}

export const LoaderWidget: FC<LoaderWidgetProps> = ({
    widthLoader,
    heightLoader,
    text,
    className   
}) => {
    return (
        <div className={`${styles.preloaderBlock} ${className || ""}`}>
            <Loader width={widthLoader} height={heightLoader} />
            <span className={styles.preloaderText}>
                {text}
            </span>
        </div>
    )
}
