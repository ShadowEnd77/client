import React from 'react'
import styles from './gameMatchesScene.module.scss'
import { GameMatchElement } from './GameMatchElement'

export const GameMatchesScene = () => {
    return (
        <section className={styles.game}>
            <div className={styles.gameInner}>
                <header className={styles.gameHeader}>
                    <div className={styles.gameHeaderTitle}>
                        <span>Соотнеси варианты ответов под предложенные фразы</span>
                    </div>
                </header>
                <div className={styles.gameArea}>
                    <div className={styles.gameAreaMatches}>
                        <div className={styles.gameAreaMatchesSide}>
                            <span className={styles.gameAreaSideCaption}>Фраза</span>
                            <ul className={styles.gameAreaMatchesList}>
                                <li className={styles.gameAreaMatchesItem}>
                                    <GameMatchElement />
                                </li>
                                <li className={styles.gameAreaMatchesItem}>
                                    <GameMatchElement />
                                </li>
                                <li className={styles.gameAreaMatchesItem}>
                                    <GameMatchElement />
                                </li>
                                <li className={styles.gameAreaMatchesItem}>
                                    <GameMatchElement />
                                </li>
                            </ul>
                        </div>
                        <div className="gameAreaMatchesSide">
                            <span className={styles.gameAreaSideCaption}>Ответ</span>
                            <ul className={styles.gameAreaMatchesList}>
                                <li className={styles.gameAreaMatchesItem}>
                                    {/* <GameMatchElement /> */}
                                </li>
                                <li className={styles.gameAreaMatchesItem}>
                                    <GameMatchElement />
                                </li>
                                <li className={styles.gameAreaMatchesItem}>
                                    <GameMatchElement />
                                </li>
                                <li className={styles.gameAreaMatchesItem}>
                                    <GameMatchElement />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.gameAreaOptions}>
                        <div className={styles.gameAreaOptionItem}>
                            <GameMatchElement />
                        </div>
                        <div className={styles.gameAreaOptionItem}>
                            <GameMatchElement />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
