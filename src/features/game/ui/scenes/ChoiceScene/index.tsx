import { FC } from 'react'
import { Scene } from '../../../../../types/entities'
import styles from './choiceScene.module.scss'
import { useAppDispatch } from '../../../../../store/hooks'
import { addToVisitedScenes, setCurrentSceneById } from '../../../slices/game-info/gameInfoSlice'
import { motion } from 'motion/react'

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
                    {payload.choices?.map((item, index) => (
                        <motion.button
                            initial={{
                                opacity: 0,
                                translate: "0 -50px"
                            }}
                            animate={{
                                opacity: 1,
                                translate: 0,
                                transition: {
                                    delay: index * 0.5
                                }
                            }}
                            key={item.next_scene_id} onClick={() => handleChoice(item.next_scene_id)} className={styles.sceneChoiceButton}>
                            {item.text}
                        </motion.button>
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
