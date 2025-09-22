import { FC } from 'react'
import styles from './loader.module.scss'

type Loader = {
    width: number
    height: number
}

export const Loader: FC<Loader> = ({ width, height }) => {
    return (
        <div className={`${styles.loader} infiniteSpin`}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
                <path
                    d="M7 13C5.81331 13 4.65327 12.6481 3.66658 11.9888C2.67988 11.3295 1.91085 10.3925 1.45672 9.2961C1.0026 8.19974 0.883777 6.99334 1.11529 5.82946C1.3468 4.66557 1.91824 3.59647 2.75736 2.75736C3.59647 1.91824 4.66557 1.3468 5.82946 1.11529C6.99334 0.883777 8.19974 1.0026 9.2961 1.45672C10.3925 1.91085 11.3295 2.67988 11.9888 3.66658C12.6481 4.65327 13 5.81331 13 7"
                    strokeWidth="1" />
            </svg>
        </div>

    )
}
