import { DragEvent, DragEventHandler, FC, MouseEvent } from 'react'
import styles from './gameMatchElement.module.scss'

type GameMatchElementProps = {
    text: string
    draggable?: boolean
    onDragStart?: (e: DragEvent<HTMLDivElement>) => void
    onDrag?: (e: DragEvent<HTMLDivElement>) => void
    onDragEnd?: (e: DragEvent<HTMLDivElement>) => void
}

export const GameMatchElement: FC<GameMatchElementProps> = ({
    text,
    draggable = false,
    onDragStart,
    onDrag,
    onDragEnd
}) => {
    return (
        <div
            draggable={draggable}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
            className={`${styles.element} ${onDragStart ? styles.dragable : ""}`}>
            <span>{text}</span>
        </div>
    )
}
