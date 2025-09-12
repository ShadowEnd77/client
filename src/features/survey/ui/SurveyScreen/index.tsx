import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Answer } from '../../../../types/entities'
import { Button } from '../../../../ui/components/buttons/Button'
import { WhiteContainer } from '../../../../ui/components/containers/WhiteContainer'
import { logoIcon, smileIcon } from '../../../../ui/icons'
import { answerTheQuestion, sendSurvey, resetSendingSurveyStatus } from '../../slices/surveySlice'
import { getAnsweredProgress } from '../../utils/helpers/getAnsweredProgress'
import styles from './surveyScreen.module.scss'
import { motion } from "motion/react"
import { getGameInfoById } from '../../../game/slices/game-info/gameInfoSlice'
import { useNavigate } from 'react-router'
import { ROUTER } from '../../../../router/consts'

export const SurveyScreen = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [buttonsDisabled, setButtonsDisabled] = useState(false)

    const {
        answers_data,
        survey_passed,
        title,
        questions,
        current_question_id,
        suggested_game,
        id,
        sending_statuses
    } = useAppSelector(state => state.survey)

    const currentQuestion = questions.items.find(item => item.id == current_question_id)

    // Automatically lock the buttons for each new question
    useEffect(() => {
        setButtonsDisabled(true)
        
        const timer = setTimeout(() => {
            setButtonsDisabled(false)
        }, 7000) // 7 sec

        return () => {
            clearTimeout(timer)
        }
    }, [current_question_id]) // It starts every time the question is changed

    const onAnswer = (answer: Answer) => {
        setButtonsDisabled(true)
        dispatch(answerTheQuestion(answer))
    }

    const onSubmit = () => {
        dispatch(sendSurvey({
            survey_id: id,
            user_id: "",
            answers: answers_data
        }))
    }

    useEffect(() => {
        if (sending_statuses.success) {
            navigate(ROUTER.PATHS.GAME_INFO)
            dispatch(getGameInfoById({ id: suggested_game, include_details: true }))
        }
    }, [sending_statuses.success])

    useEffect(() => {
        return () => {
            dispatch(resetSendingSurveyStatus())
        }
    }, [])

    return (
        <WhiteContainer className={styles.section}>
            <header className={styles.header}>
                <h1 className={`${styles.title}`}>{title}</h1>
                <img src={logoIcon} height={20} width={63} alt="Логотип" />
            </header>
            <div className={styles.survey}>
                {
                    survey_passed ?
                        <div className={styles.surveyPassed}>
                            <motion.img
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                height={160} width={160} src={smileIcon} alt="" />
                            <h2 className={styles.surveyTitle}>Спасибо тебе <br /> за пройденный опрос!</h2>
                            <div className={styles.buttons}>
                                <Button isLoading={sending_statuses.loading} onClick={onSubmit} classNames={{ button: `${styles.surveyButton}` }} >
                                    Отправить ответы
                                </Button>
                            </div>
                        </div>
                        : <>
                            <header className={styles.surveyHeader}>
                                <h2 className={styles.surveyTitle}>
                                    <div className={styles.surveyTitleInner}>
                                        <span className={styles.surveyQuestionLabel}>Вопрос</span>&nbsp;
                                        <span className={styles.surveyQuestionCount}>{getAnsweredProgress(survey_passed, answers_data, questions.items.length)}/{questions.items.length}</span>
                                    </div>
                                </h2>
                                <div className={`surveyProgressWrapper ${styles.progressBar}`}>
                                    <div
                                        style={{ width: `${getAnsweredProgress(survey_passed, answers_data, questions.items.length) / questions.items.length * 100}%` }}
                                        className={`surveyProgress ${styles.line}`} />
                                </div>
                            </header>
                            <div className={styles.surveyDescription}>
                                <motion.p
                                    initial={{
                                        scale: 0
                                    }}
                                    animate={{
                                        scale: 1
                                    }}
                                    key={currentQuestion?.id}>
                                    {currentQuestion?.text}
                                </motion.p>
                            </div>
                            <div className={styles.surveyControls}>
                                <span className={styles.suggestion}>Выберите вариант ответа</span>
                                <div className={styles.buttons}>
                                    <Button
                                        disabled={buttonsDisabled}
                                        onClick={() => onAnswer(currentQuestion?.options[1] as Answer)}
                                        classNames={{ 
                                            button: `${styles.buttonNo} ${styles.surveyButton} ${buttonsDisabled ? '' : styles.buttonNoActive}`
                                        }}>
                                        {currentQuestion?.options[1]?.text || "Кнопка"}
                                    </Button>
                                    <Button
                                        disabled={buttonsDisabled}
                                        onClick={() => onAnswer(currentQuestion?.options[0] as Answer)}
                                        classNames={{ button: `${styles.surveyButton}` }}>
                                        {currentQuestion?.options[0]?.text}
                                    </Button>
                                </div>
                            </div>
                        </>
                }
            </div>
        </WhiteContainer >
    )
}