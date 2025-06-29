import styles from './gameAchievement.module.scss'
import { fullsizeEnableIcon, starsIcon } from '../../../../../ui/icons'
import { Button } from '../../../../../ui/components/buttons/Button'
import { successIcon } from '../../../../../ui/icons'
import { ControlButton } from '../../../../../ui/components/buttons/ControlButton'
import { motion } from "motion/react"

export const GameAchievementModal = () => {
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
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.7 } }}
                    className={styles.modalBody}>
                    <ControlButton classNames={{ button: styles.modalCloseButton }}>
                        <img src={fullsizeEnableIcon} height={18} width={18} alt="" />
                    </ControlButton>
                    <div className={styles.modalContent}>
                        <div className={styles.modalContentHead}>
                            <img src={starsIcon} width={206} height={91} alt="" />
                        </div>
                        <div className={styles.modalContentInfo}>
                            <div className={styles.modalContentDescription}>
                                <p>
                                    Поздравляем! Ты получил новое достижение “Осознанный выбор и уверенность в себе”. Чтобы закрыть окно нажми кнопку “Продолжить”
                                </p>
                            </div>
                        </div>
                        <Button>Продолжить</Button>
                    </div>
                    <div className={styles.modalCoverBlock}>
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
                                НОВОЕ ДОСТИЖЕНИЕ “ОСОЗНАННЫЙ ВЫБОР И УВЕРЕННОСТЬ В СЕБЕ”
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
