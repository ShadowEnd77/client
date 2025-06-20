import { FC, useEffect, useState } from 'react'
import styles from './gameSceneCard.module.scss'
import { GameDialog } from '../../../../types/entities'
import previewImage from '../../../../assets/images/preview.jpg'
import { motion } from "framer-motion"

export type GameSceneCard = {
  delayShow: number
  dialog: GameDialog
}

export const GameSceneCard: FC<GameSceneCard> = ({
  delayShow,
  dialog
}) => {
  const [isAnimated, setIsAnimated] = useState(false)
  
  // Сбрасываем анимацию при изменении dialog
  useEffect(() => {
    setIsAnimated(false)
    const timer = setTimeout(() => setIsAnimated(true), 50)
    return () => clearTimeout(timer)
  }, [dialog])

  return (
    <div key={dialog.text} className={styles.gameSceneCard}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1, 
          opacity: 1, 
          transition: {
            delay: delayShow,
            duration: 0.5
          }
        }}
        style={{ backgroundImage: `url(${dialog.image})` }} 
        className={styles.gameSceneCover} 
      />
      
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
        {dialog.name ? (
          <div className={styles.gameSceneDialogPhrase}>
            <div className={styles.gameSceneDialogAuthor}>{dialog.name}:</div>
            <p>{dialog.text}</p>
          </div>
        ) : (
          <div className={styles.gameSceneDialogState}>
            <p>{dialog.text}</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}