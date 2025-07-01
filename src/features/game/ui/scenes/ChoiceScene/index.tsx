import React, { FC } from 'react'
import { GameChoice, Scene } from '../../../../../types/entities'
import styles from './choiceScene.module.scss'
import { useAppDispatch } from '../../../../../store/hooks'
import { addToVisitedScenes, setCurrentSceneById } from '../../../slices/game-info/gameInfoSlice'

type ChoiceSceneProps = Scene

export const ChoiceScene: FC<ChoiceSceneProps> = ({
    id,
    payload
}) => {
    const dispatch = useAppDispatch()

    const handleChoice = (next_scene_id: number) => {
        dispatch(setCurrentSceneById(next_scene_id))
        dispatch(addToVisitedScenes(id))
    }

    return (
        <div className={styles.sceneChoiceBlock}>
            <header className={styles.sceneChoiceHeader}>
                <span>{payload.description || ""}</span>
            </header>
            <div className={styles.sceneChoiceListWrapper}>
                <div className={styles.sceneChoicesList}>
                    {payload.choices?.map(item => (
                        <button onClick={() => handleChoice(item.next_scene_id)} className={styles.sceneChoiceButton}>
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
