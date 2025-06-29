import React, { FC } from 'react'
import { Scene } from '../../../../../types/entities'
import styles from './choiceScene.module.scss'
import { useAppDispatch } from '../../../../../store/hooks'
import { setCurrentSceneById } from '../../../slices/game-info/gameInfoSlice'

type ChoiceSceneProps = Scene

export const ChoiceScene: FC<ChoiceSceneProps> = ({
    payload
}) => {
    const dispatch = useAppDispatch()

    return (
        <div className={styles.sceneChoiceBlock}>
            <header className={styles.sceneChoiceHeader}>
                <span>{payload.description || ""}</span>
            </header>
            <div className={styles.sceneChoiceListWrapper}>
                <div className={styles.sceneChoicesList}>
                    {payload.choices?.map(item => (
                        <button onClick={() => dispatch(setCurrentSceneById(item.next_scene_id))} className={styles.sceneChoiceButton}>
                            {item.text}
                        </button>
                    ))}
                </div>
                <span className={styles.sceneChoicesCaption}>
                    Подсказка: Определись с выбором и нажми на одну из этих кнопок
                </span>
            </div>
            <div></div>
        </div>
    )
}
