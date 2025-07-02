import { FC, useContext, useEffect, useState } from 'react'
import styles from './gameSceneCard.module.scss'
import { GameAchievement, GameDialog } from '../../../../../types/entities'
import { motion } from "motion/react"
import { successIcon } from '../../../../../ui/icons'
import { AudioContext } from '../../../../audio/AudioProvider'

export type GameSceneCard = {
  delayShow?: number
  dialog?: GameDialog
  achievement?: GameAchievement | null
  scene_id: number
  dialog_index?: number
  audio_duration?: number,
}

export const GameSceneCard: FC<GameSceneCard> = ({
  delayShow = 0.5,
  dialog,
  achievement,
  audio_duration = 0,
  scene_id
}) => {
  const [isAnimated, setIsAnimated] = useState(false)
  //const { loadTrack, getAudioState } = useContext(AudioContext)

  // Сбрасываем анимацию при изменении dialog
  useEffect(() => {
    setIsAnimated(false)

    const timer = setTimeout(() => setIsAnimated(true), 50)

    return () => clearTimeout(timer)
  }, [dialog])

  // useEffect(() => {
  //   const audioKey = `voice_${scene_id}_${dialog_index}`
  //   const voice = loadTrack(audioKey, dialog?.voice!)

  //   const timer = setTimeout(() => {
  //     //play(audioKey)
  //     console.log("start play music");

  //   }, delayShow * 1000)

  //   return () => clearTimeout(timer)
  // }, [delayShow])

  return (
    <div key={dialog?.text} className={styles.gameSceneCard}>
      {
        achievement ?
          <motion.div
            initial={{
              opacity: 0,
              transform: `translateY(-300px)`
            }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: delayShow },
              transform: `translateY(0)`
            }}
            className={styles.gameSceneAchievementPopup}>
            <img src={successIcon} height={50} width={50} alt="" />
            <span>
              НОВОЕ ДОСТИЖЕНИЕ "{achievement.title.toUpperCase()}"
            </span>
          </motion.div> : null
      }

      <motion.div
        initial={{ opacity: 0 }}
        animate={isAnimated ? {
          opacity: 1,
          transition: {
            delay: delayShow * 1.1,
            duration: 0.5
          }
        } : {}}
        style={{ backgroundImage: `url(${achievement?.cover_image || dialog?.image})` }}
        className={styles.gameSceneCoverBack}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isAnimated ? {
          scale: 1,
          opacity: 1,
          transition: {
            delay: delayShow,
            duration: 0.5
          }
        } : {}}
        style={{ backgroundImage: `url(${achievement?.cover_image || dialog?.image})` }}
        className={styles.gameSceneCover}
      />

      {
        !achievement ?
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isAnimated ? {
              scale: 1,
              opacity: 1,
              transition: {
                delay: delayShow + 0.1,
                duration: 0.5
              }
            } : {}}
            className={styles.gameSceneDialog}
          >
            {dialog?.name ? (
              <div className={styles.gameSceneDialogPhrase}>
                <div className={styles.gameSceneDialogAuthor}>{dialog.name}:</div>
                <p>{dialog?.text}</p>
              </div>
            ) : (
              <div className={styles.gameSceneDialogState}>
                <p>{dialog?.text}</p>
              </div>
            )}
          </motion.div> : null
      }
    </div>
  )
}