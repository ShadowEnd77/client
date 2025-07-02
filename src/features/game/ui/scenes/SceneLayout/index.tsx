import { FC, useContext, useEffect, useState } from 'react'
import styles from './sceneLayout.module.scss'
import { ControlButton } from '../../../../../ui/components/buttons/ControlButton'
import { arrowRightIcon } from '../../../../../ui/icons'
import { GameSceneCard } from '../GameSceneCard'
import { Scene } from '../../../../../types/entities'
import { ChoiceScene } from '../ChoiceScene'
import { addToVisitedScenes, finishGame, setAchievementData, setCurrentSceneAnimated, setCurrentSceneById, setIsOpenAchievement } from '../../../slices/game-info/gameInfoSlice'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { GameMatchesScene } from '../GameMatchesScene'
import { AudioContext } from '../../../../audio/AudioProvider'

type SceneLayoutProps = {
    scene: Scene
}

export const SceneLayout: FC<SceneLayoutProps> = ({ scene }) => {
    const dispatch = useAppDispatch();
    const { current_scene_animated, data } = useAppSelector(state => state.game)
    const { play, pause, loadTrack, onAudioEnd, setVolume } = useContext(AudioContext)

    const [currentVoiceId, setCurrentVoiceId] = useState<string | null>(null)
    const [currentDialogIndex, setCurrentDialogIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const currentSceneIsDialog = scene.type == "dialogue"
    const dialogues = scene.payload.dialogues || []


    const playNextDialogAudio = () => {
        setIsPlaying(false)
        if (currentDialogIndex < dialogues.length - 1) {
            setCurrentDialogIndex(prev => prev + 1)
        }
    }

    const handleNextScene = () => {
        // Если есть активное аудио - останавливаем
        dispatch(addToVisitedScenes(scene.id))

        if (currentVoiceId) {
            pause(currentVoiceId)
        }

        if (currentSceneIsDialog && (dialogues.length > 1) && scene.payload.achievement) {
            dispatch(setAchievementData(scene.payload.achievement))
            dispatch(setIsOpenAchievement(true))
            return
        }

        if (scene.payload.next_scene_id == null) {
            dispatch(finishGame())
            return
        }

        dispatch(setCurrentSceneById(scene.payload.next_scene_id!))
    }

    const renderScene = () => {
        if (currentSceneIsDialog && dialogues.length) {
            if (dialogues.length > 1) {
                return dialogues.map((dialog, index) => (
                    <GameSceneCard
                        key={`${scene.id}_${index}`}
                        scene_id={scene.id}
                        dialog={dialog}
                        delayShow={!index ? 0.5 : index + 1}
                    />
                ))
            }
            if (dialogues.length == 1) {
                return (
                    <>
                        <GameSceneCard
                            scene_id={scene.id}
                            dialog={dialogues[0]}
                        />
                        <GameSceneCard
                            scene_id={scene.id}
                            achievement={scene.payload.achievement}
                            delayShow={2}
                        />
                    </>
                )
            }
        }
        if (scene.type == "choice" && dialogues.length) {
            return <>
                <GameSceneCard
                    scene_id={scene.id}
                    dialog={dialogues[0]}
                    delayShow={0.5}
                />
                <ChoiceScene {...scene} />
            </>
        }
        if (scene.type == "match") {
            return <GameMatchesScene scene_id={scene.id} payload={scene.payload} />
        }
    }


    // Воспроизведение текущего диалога
    useEffect(() => {
        if (!dialogues.length) return

        const audioId = `${scene.id}_${currentDialogIndex}`
        const dialog = dialogues[currentDialogIndex]
        console.log(dialog);

        if (!dialog.voice && !currentDialogIndex) {
            if (!dialogues[currentDialogIndex + 1].voice) {
                return
            }
            setTimeout(playNextDialogAudio, 3000)
            return
        }

        const cleanup = onAudioEnd(audioId, playNextDialogAudio)

        if (dialog.voice) {
            setCurrentVoiceId(audioId)
            setVolume(audioId, 0.5)

            setTimeout(() => {
                play(audioId)
                setIsPlaying(true)
            }, 500)

            return cleanup
        }

    }, [currentDialogIndex, scene.id])

    // Загрузка аудио при изменении сцены
    useEffect(() => {
        setCurrentDialogIndex(0)
        setCurrentVoiceId(null)
        setIsPlaying(false)

        // Загружаем все аудио для диалогов
        if (dialogues.length) {
            dialogues.forEach((dialog, index) => {
                if (dialog.voice) {
                    const audioId = `${scene.id}_${index}`
                    loadTrack(audioId, dialog.voice)
                }
            })
        }

        setTimeout(() => {
            dispatch(setCurrentSceneAnimated(true))
        }, 4000)

        return () => {
            // Останавливаем все аудио при размонтировании
            dialogues.forEach((_, index) => {
                const audioId = `${scene.id}_${index}`
                pause(audioId)
            })
        }
    }, [scene.id])

    useEffect(() => {
        // Загружаем все аудио для диалогов всех сцен
        data.scenes.map(item => {
            dialogues.forEach((dialog, index) => {
                if (dialog.voice) {
                    const audioId = `${item.id}_${index}`
                    loadTrack(audioId, dialog.voice)

                }
            })
        })
    }, [])


    return (
        <div className={styles.sceneLayout}>
            {renderScene()}
            {
                currentSceneIsDialog &&
                <aside className={styles.sceneControls}>
                    <ControlButton
                        classNames={{ button: styles.nextSceneButton }}
                        disabled={!current_scene_animated || (dialogues.some(item => item.voice) && isPlaying)}
                        onClick={handleNextScene}>
                        Далее
                        <img src={arrowRightIcon} height={18} width={18} alt="" />
                    </ControlButton>
                </aside>
            }
        </div>
    )
}