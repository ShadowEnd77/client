import React, { FC, useEffect, useState } from 'react';
import styles from './gameMatchesScene.module.scss';
import { GameMatchElement } from './GameMatchElement';
import logo from '../../../../../assets/images/white-logo.svg';
import miniGameBg from '../../../../../assets/images/mini-game-bg.png';
import { ScenePayload } from '../../../../../types/entities';
import { Button } from '../../../../../ui/components/buttons/Button';
import { motion } from "motion/react"
import { addToVisitedScenes, finishGame, setCurrentSceneById } from '../../../slices/game-info/gameInfoSlice';
import { useAppDispatch } from '../../../../../store/hooks';
import { checkIsMatchCorrect } from '../../../utils/helpers/checkIsMatchCorrect';

type GameMatchSceneProps = {
    payload: ScenePayload;
    scene_id: number
};

type DraggedItem = {
    text: string;
    source: 'options' | 'answer';
    index?: number;
};

export const GameMatchesScene: FC<GameMatchSceneProps> = ({ payload, scene_id }) => {
    const dispatch = useAppDispatch()
    const [isAnimatedOnLoad, setIsAnimatedOnLoad] = useState(false)

    const [answers, setAnswers] = useState<(string | null)[]>([]);
    const [options, setOptions] = useState<string[]>([]);
    const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
    const [hoveredAnswerIndex, setHoveredAnswerIndex] = useState<number | null>(null);
    const [optionsAreaDragIsOver, setOptionsAreaDragIsOver] = useState(false)

    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        text: string,
        source: 'options' | 'answer',
        index?: number
    ) => {
        e.dataTransfer.setData('text/plain', text); // Важно для Firefox
        e.dataTransfer.effectAllowed = 'move';
        setDraggedItem({ text, source, index });
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        setDraggedItem(null);
        e.currentTarget.classList.remove(styles.draggingSource);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        e.stopPropagation()
        setHoveredAnswerIndex(index);
    };

    const handleDragLeave = () => {
        setHoveredAnswerIndex(null);
    };

    const handleDrop = (e: React.DragEvent, answerIndex: number) => {
        e.preventDefault();
        e.stopPropagation()
        setHoveredAnswerIndex(null);

        if (!draggedItem) return;

        if (draggedItem.source === 'options' && draggedItem.index !== undefined) {
            const currentAnswer = answers[answerIndex];

            setAnswers(prev => {
                const newAnswers = [...prev];
                newAnswers[answerIndex] = options[draggedItem.index!];
                return newAnswers;
            });

            setOptions(prev => prev.filter((_, idx) => idx !== draggedItem.index));

            if (currentAnswer !== null) {
                setOptions(prev => [...prev, currentAnswer]);
            }

            return;
        }
        if (draggedItem.source === 'answer' && draggedItem.index !== undefined) {
            setAnswers(prev => {
                const newAnswers = [...prev];
                const temp = newAnswers[draggedItem.index!];
                newAnswers[draggedItem.index!] = newAnswers[answerIndex];
                newAnswers[answerIndex] = temp;
                return newAnswers;
            });
        }
    };

    const handleOptionsDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation()

        setOptionsAreaDragIsOver(false)

        if (!draggedItem || draggedItem.source !== 'answer') return;

        if (draggedItem.index !== undefined) {
            setAnswers(prev => {
                const newAnswers = [...prev];
                const removed = newAnswers[draggedItem.index!];
                newAnswers[draggedItem.index!] = null;
                setOptions(prevOptions => [...prevOptions, removed!]);
                return newAnswers;
            });
        }
    };

    const handleOptionsDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation()

        if (!optionsAreaDragIsOver) {
            setOptionsAreaDragIsOver(true)
        }
    };

    const handleOptionsDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation()
        setOptionsAreaDragIsOver(false)
    };

    const handleFinishMiniGame = () => {
        const matchIsCorrect = checkIsMatchCorrect(payload.pairs!, answers)

        if (matchIsCorrect) {
            //alert("Всё верно указано!")
            dispatch(addToVisitedScenes(scene_id))
        }

        if (payload.next_scene_id == null) {
            dispatch(finishGame())

            return
        }

        dispatch(setCurrentSceneById(payload.next_scene_id!))
    }

    useEffect(() => {
        if (payload.pairs) {
            setAnswers(new Array(payload.pairs.length).fill(null));
            setOptions(payload.pairs.map(pair => pair.v));
        }
    }, [payload.pairs]);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimatedOnLoad(true)
        }, 3000)
    }, [])

    return (
        <section className={styles.game}>
            <div className={styles.gameLogo}>
                <img src={logo} width={77} height={24} alt="" />
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    translate: "100%"
                }}
                animate={{
                    opacity: 1,
                    translate: 0,
                    transition: {
                        duration: 2
                    }
                }}
                className={styles.gameBackground}>
                <img src={miniGameBg} width={233} height={350} alt="" />
            </motion.div>
            <div className={styles.gameInner}>
                <header className={styles.gameHeader}>
                    <div className={styles.gameHeaderTitle}>
                        <span>Перетаскивай ответы мышью к подходящим фразам</span>
                    </div>
                </header>
                <div className={styles.gameArea}>
                    <div className={styles.gameAreaMain}>
                        <div className={styles.gameAreaMatches}>
                            <div className={styles.gameAreaMatchesSide}>
                                <span className={styles.gameAreaSideCaption}>Фраза</span>
                                <ul className={styles.gameAreaMatchesList}>
                                    {payload.pairs?.map((item, index) => (
                                        <motion.li
                                            initial={{
                                                opacity: 0,
                                                translate: "0 -50px"
                                            }}
                                            animate={{
                                                opacity: 1,
                                                translate: 0,
                                                transition: {
                                                    delay: index * 0.4
                                                }
                                            }}
                                            key={item.k}
                                            className={styles.gameAreaMatchesItem}>
                                            <GameMatchElement text={item.k} />
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.gameAreaMatchesSide}>
                                <span className={styles.gameAreaSideCaption}>Ответ</span>
                                <ul className={styles.gameAreaMatchesList}>
                                    {payload.pairs?.map((_, index) => (
                                        <motion.li
                                            initial={{
                                                opacity: 0,
                                                translate: "0 -50px"
                                            }}
                                            animate={{
                                                opacity: 1,
                                                translate: 0,
                                                transition: !isAnimatedOnLoad ? {
                                                    delay: index * 0.3
                                                } : {}
                                            }}
                                            key={index}
                                            className={`${styles.gameAreaMatchesItem} ${hoveredAnswerIndex === index ? styles.gameMatchItemOver : ''}`}
                                            onDragOver={(e) => handleDragOver(e, index)}
                                            onDragLeave={handleDragLeave}
                                            onDrop={(e) => handleDrop(e, index)}
                                        >
                                            {answers[index] && (
                                                <GameMatchElement
                                                    draggable
                                                    text={answers[index]!}
                                                    onDragStart={(e) => handleDragStart(e, answers[index]!, 'answer', index)}
                                                    onDragEnd={handleDragEnd}
                                                />
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {
                            answers.every(answer => answer !== null) ?
                                <Button onClick={handleFinishMiniGame} classNames={{ button: styles.gameFinishButton }}>Продолжить</Button> :
                                null
                        }
                    </div>
                    <div
                        className={`${styles.gameAreaOptions} ${optionsAreaDragIsOver ? styles.gameAreaOptionsOver : ""}`}
                        onDrop={handleOptionsDrop}
                        onDragOver={handleOptionsDragOver}
                        onDragLeave={handleOptionsDragLeave}
                    >
                        
                        {options.map((option: string, index: number) => (
                            <motion.div
                                initial={{
                                    scale: 0
                                }}
                                animate={{
                                    scale: 1,
                                    transition: !isAnimatedOnLoad ? {
                                        delay: index * 0.4
                                    } : {}
                                }}
                                key={index} className={styles.gameAreaOptionItem}>
                                <GameMatchElement
                                    draggable
                                    text={option}
                                    index={index}
                                    onDragStart={(e) => handleDragStart(e, option, 'options', index)}
                                    onDragEnd={handleDragEnd}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};