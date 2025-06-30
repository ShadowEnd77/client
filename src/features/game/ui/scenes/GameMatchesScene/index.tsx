import React, { FC, useEffect, useState } from 'react';
import styles from './gameMatchesScene.module.scss';
import { GameMatchElement } from './GameMatchElement';
import logo from '../../../../../assets/images/white-logo.svg';
import miniGameBg from '../../../../../assets/images/mini-game-bg.png';
import { ScenePayload } from '../../../../../types/entities';

type GameMatchSceneProps = {
    match_data: ScenePayload;
};

type DraggedItem = {
    text: string;
    source: 'options' | 'answer';
    index?: number;
};

export const GameMatchesScene: FC<GameMatchSceneProps> = ({ match_data }) => {
    const [answers, setAnswers] = useState<(string | null)[]>([]);
    const [options, setOptions] = useState<string[]>([]);
    const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
    const [hoveredAnswerIndex, setHoveredAnswerIndex] = useState<number | null>(null);
    const [optionsAreaDragIsOver, setOptionsAreaDragIsOver] = useState(false)

    useEffect(() => {
        if (match_data.pairs) {
            setAnswers(new Array(match_data.pairs.length).fill(null));
            setOptions(match_data.pairs.map(pair => pair.v));
        }
    }, [match_data.pairs]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, text: string, source: 'options' | 'answer', index?: number) => {
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

        if (draggedItem.source === 'options') {
            const currentAnswer = answers[answerIndex];

            setAnswers(prev => {
                const newAnswers = [...prev];
                newAnswers[answerIndex] = draggedItem.text;
                return newAnswers;
            });

            setOptions(prev => prev.filter(opt => opt !== draggedItem.text));

            if (currentAnswer) {
                setOptions(prev => [...prev, currentAnswer]);
            }
        } else if (draggedItem.source === 'answer' && draggedItem.index !== undefined) {
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
                newAnswers[draggedItem.index!] = null;
                return newAnswers;
            });

            setOptions(prev => [...prev, draggedItem.text]);
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

    useEffect(() => {
        console.log(answers);

    }, [answers])

    return (
        <section className={styles.game}>
            <div className={styles.gameLogo}>
                <img src={logo} width={77} height={24} alt="" />
            </div>
            <div className={styles.gameBackground}>
                <img src={miniGameBg} width={233} height={350} alt="" />
            </div>
            <div className={styles.gameInner}>
                <header className={styles.gameHeader}>
                    <div className={styles.gameHeaderTitle}>
                        <span>Перетаскивай ответы мышью к подходящим фразам</span>
                    </div>
                </header>
                <div className={styles.gameArea}>
                    <div className={styles.gameAreaMatches}>
                        <div className={styles.gameAreaMatchesSide}>
                            <span className={styles.gameAreaSideCaption}>Фраза</span>
                            <ul className={styles.gameAreaMatchesList}>
                                {match_data.pairs?.map((item, index) => (
                                    <li key={item.k} className={styles.gameAreaMatchesItem}>
                                        <GameMatchElement text={item.k} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="gameAreaMatchesSide">
                            <span className={styles.gameAreaSideCaption}>Ответ</span>
                            <ul className={styles.gameAreaMatchesList}>
                                {match_data.pairs?.map((_, index) => (
                                    <li
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
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`${styles.gameAreaOptions} ${optionsAreaDragIsOver ? styles.gameAreaOptionsOver : ""}`}
                        onDrop={handleOptionsDrop}
                        onDragOver={handleOptionsDragOver}
                        onDragLeave={handleOptionsDragLeave}
                    >
                        {options.map((option) => (
                            <div key={option} className={styles.gameAreaOptionItem}>
                                <GameMatchElement
                                    draggable
                                    text={option}
                                    onDragStart={(e) => handleDragStart(e, option, 'options')}
                                    onDragEnd={handleDragEnd}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};