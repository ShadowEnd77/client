import { FC, useEffect } from 'react'
import styles from './sceneLayout.module.scss'
import { ControlButton } from '../../../../../ui/components/buttons/ControlButton'
import { arrowRightIcon } from '../../../../../ui/icons'
import { GameSceneCard } from '../GameSceneCard'
import { Scene } from '../../../../../types/entities'
import { ChoiceScene } from '../ChoiceScene'
import { addToVisitedScenes, setAchievementData, setCurrentSceneAnimated, setCurrentSceneById, setIsOpenAchievement } from '../../../slices/game-info/gameInfoSlice'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { GameMatchesScene } from '../GameMatchesScene'

type SceneLayoutProps = {
    scene: Scene
}
export const SceneLayout: FC<SceneLayoutProps> = ({ scene }) => {
    const dispatch = useAppDispatch();
    const { current_scene_animated } = useAppSelector(state => state.game)

    const currentSceneIsDialog = scene.type == "dialogue"

    const renderScene = () => {
        if (currentSceneIsDialog && scene.payload.dialogues && scene.payload.dialogues.length) {
            if (scene.payload.dialogues.length > 1) {
                return scene.payload.dialogues.map((dialog, index) => (
                    <GameSceneCard
                        dialog={dialog}
                        delayShow={!index ? 0.5 : index + 1} />
                ))
            }
            if (scene.payload.dialogues.length == 1) {
                return (
                    <>
                        <GameSceneCard
                            dialog={scene.payload.dialogues[0]}
                        />
                        <GameSceneCard
                            achievement={scene.payload.achievement}
                            delayShow={2}
                        />
                    </>
                )
            }


        }
        if (scene.type == "choice" && scene.payload.dialogues) {
            return <>
                <GameSceneCard
                    dialog={scene.payload.dialogues[0]}
                    delayShow={0.5} />
                <ChoiceScene {...scene} />
            </>
        }
        if (scene.type == "match") {
            return <GameMatchesScene scene_id={scene.id} payload={scene.payload} />
        }
    }

    const handleNextScene = () => {
        dispatch(addToVisitedScenes(scene.id))
        
        if (currentSceneIsDialog && (scene.payload.dialogues!.length > 1) && scene.payload.achievement) {
            dispatch(setAchievementData(scene.payload.achievement))
            dispatch(setIsOpenAchievement(true))
            return
        }
        
        if(scene.payload.next_scene_id == null) {
            alert("finish")
            return
        }

        dispatch(setCurrentSceneById(scene.payload.next_scene_id!))
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(setCurrentSceneAnimated(true))
        }, 3000)
    }, [scene.id])

    return (
        <div className={styles.sceneLayout}>

            {renderScene()}
            {
                currentSceneIsDialog &&
                <aside className={styles.sceneControls}>
                    {/* <ControlButton disabled>
                        <img style={{ scale: -1 }} src={arrowRightIcon} height={18} width={18} alt="" />
                    </ControlButton> */}
                    <ControlButton
                        classNames={{ button: styles.nextSceneButton }}
                        disabled={!current_scene_animated}
                        onClick={handleNextScene}>
                        Далее
                        <img src={arrowRightIcon} height={18} width={18} alt="" />
                    </ControlButton>
                </aside>
            }
        </div>
    )
}
