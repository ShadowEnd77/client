import { useEffect } from 'react'
import styles from './gameAchievement.module.scss'
import { starsIcon } from '../../../../../ui/icons'
import { Button } from '../../../../../ui/components/buttons/Button'
import { successIcon } from '../../../../../ui/icons'
import { motion } from "motion/react"
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { resetAchievementData, setIsOpenAchievement } from '../../../slices/game-info/gameInfoSlice'
import { FC } from 'react'
import audioFile from '../../../../../assets/audio/Achievement.mp3';
import { useAudio } from '../../../../audio/AudioProvider'

type GameAchievementModalProps = {
    onClose: () => void
}
export const GameAchievementModal: FC<GameAchievementModalProps> = ({
    onClose,
}) => {
    const dispatch = useAppDispatch()
    const { cover_image, title } = useAppSelector(state => state.game.modal_achievement.data)
    const { audio_muted } = useAppSelector(state => state.settings)
    const { play, pause, loadTrack } = useAudio()

    const handleClose = () => {
        onClose()
        dispatch(setIsOpenAchievement(false))
        dispatch(resetAchievementData())
    }

    useEffect(() => {
        const audioId = 'Achievement';
        if (audioFile) {
            loadTrack(audioId, audioFile);
            if (!audio_muted) {
                play(audioId);
            } else {
                pause(audioId);
            }
        }
        return () => {
            pause(audioId);
        }
    }, []);

    return (
        <div className={styles.modal}>
            <div className={styles.modalInner}>
                <motion.div
                    initial={{ backdropFilter: `blur(0)` }}
                    exit={{ backdropFilter: `blur(0)` }}
                    animate={{
                        backdropFilter: `blur(10px)`,
                        transition: { duration: 0.5, delay: 0.5 }
                    }}
                    className={styles.modalBlur} />
                <motion.div
                    onClick={e => e.stopPropagation()}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.7 } }}
                    className={styles.modalBody}>
                    {/* <ControlButton classNames={{ button: styles.modalCloseButton }}>
                        <img src={fullsizeEnableIcon} height={18} width={18} alt="" />
                    </ControlButton> */}
                    <div className={styles.modalContent}>
                        <div className={styles.modalContentHead}>
                            <img src={starsIcon} width={206} height={91} alt="" />
                        </div>
                        <div className={styles.modalContentInfo}>
                            <div className={styles.modalContentDescription}>
                                <p>
                                    Поздравляем! Ты получил новое достижение "{title}. Чтобы закрыть окно нажми кнопку “Продолжить”
                                </p>
                            </div>
                        </div>
                        <Button onClick={handleClose}>Продолжить</Button>
                    </div>
                    <div style={{ backgroundImage: `url(${cover_image})` }} className={styles.modalCoverBlock}>
                        <motion.div
                            initial={{
                                opacity: 0,
                                transform: `translateY(-100px)`
                            }}
                            animate={{
                                opacity: 1,
                                transition: { duration: 1, delay: 0.5 },
                                transform: `translateY(0)`
                            }}
                            className={styles.modalAchievementPopup}>
                            <img src={successIcon} height={50} width={50} alt="" />
                            <span>
                                НОВОЕ ДОСТИЖЕНИЕ “{title.toUpperCase()}”
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
