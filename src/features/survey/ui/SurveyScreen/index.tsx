import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { Answer } from '../../../../types/entities'
import { Button } from '../../../../ui/components/buttons/Button'
import { WhiteContainer } from '../../../../ui/components/containers/WhiteContainer'
import { Loader } from '../../../../ui/components/service/Loader'
import { logoIcon, smileIcon } from '../../../../ui/icons'
import { answerTheQuestion, sendSurvey, getSurvey, resetSendingSurveyStatus } from '../../slices/surveySlice'
import { getAnsweredProgress } from '../../utils/helpers/getAnsweredProgress'
import styles from './surveyScreen.module.scss'
import { LoaderWidget } from '../../../../ui/components/service/LoaderWidget'
import { motion } from "motion/react"
import { useNavigate } from 'react-router'

export const SurveyScreen = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        answers_data,
        survey_passed,
        title,
        questions,
        current_question_id,
        id,
        sending_statuses
    } = useAppSelector(state => state.survey)

    const { statuses } = useAppSelector(state => state.game)
    const currentQuestion = questions.items.find(item => item.id == current_question_id)

    const onAnswer = (answer: Answer) => {
        dispatch(answerTheQuestion(answer))
    }

    const onSubmit = () => {
        dispatch(sendSurvey({
            survey_id: id,
            user_id: "",
            answers: answers_data
        }))
        navigate("/game")
    }

    useEffect(() => {
        if (statuses.success) {

        }
    }, [statuses.success])

    useEffect(() => {
        dispatch(getSurvey())

        return () => {
            dispatch(resetSendingSurveyStatus())
        }
    }, [])

    if (questions.statuses.loading || !currentQuestion) {
        return <LoaderWidget
            widthLoader={50}
            heightLoader={50}
            text={"Подождите, загружаем опросник..."}
        />
    }

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
                                    key={currentQuestion.id}>
                                    {currentQuestion?.text}
                                </motion.p>
                            </div>
                            <div className={styles.surveyControls}>
                                <span className={styles.suggestion}>Выберите вариант ответа</span>
                                <div className={styles.buttons}>
                                    <Button
                                        onClick={() => onAnswer(currentQuestion?.options[1] as Answer)}
                                        classNames={{ button: `${styles.buttonNo} ${styles.surveyButton}` }}>
                                        {currentQuestion?.options[1]?.text || "Кнопка"}
                                    </Button>
                                    <Button
                                        onClick={() => onAnswer(currentQuestion?.options[0] as Answer)}
                                        classNames={{ button: `${styles.surveyButton}` || "Кнопка" }}>
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
