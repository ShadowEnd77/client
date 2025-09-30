import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { WhiteContainer } from '../../../../ui/components/containers/WhiteContainer';
import { logoIcon } from '../../../../ui/icons';
import styles from './GameSelectionScreen.module.scss';
import { getGameInfoById } from '../../../game/slices/game-info/gameInfoSlice';
import { useNavigate } from 'react-router';
import { ROUTER } from '../../../../router/consts';
import { SelectionElement } from './SelectionElement';
import { mockGame as mockGame1 } from '../../utils/mock-data/gameMockData_1';
import { mockGame as mockGame2 } from '../../utils/mock-data/gameMockData_2';
import { mockGame as mockGame3 } from '../../utils/mock-data/gameMockData_3';
import { mockGame as mockGame4 } from '../../utils/mock-data/gameMockData_4';
import { mockGame as mockGame5 } from '../../utils/mock-data/gameMockData_5';
import { resetGameInProgress } from '../../slices/game-info/gameInfoSlice';
import { resetPassedGameData } from '../../slices/game-info/gameInfoSlice';

export const GameSelectionScreen = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handlePlay = (gameId: number) => {
        dispatch(resetGameInProgress());
        dispatch(resetPassedGameData());
        navigate(ROUTER.PATHS.GAME_INFO);
        dispatch(getGameInfoById({ id: gameId, include_details: true }));
    };

    return (
        <WhiteContainer className={styles.section}>
            <header className={styles.header}>
                <h1 className={`${styles.title}`}>Все игры</h1>
                <img src={logoIcon} height={20} width={63} alt="Логотип" />
            </header>
            <div className={styles.SelectionGameList}>
                <SelectionElement game={mockGame1} onPlay={() => handlePlay(mockGame1.id)} />
                <SelectionElement game={mockGame2} onPlay={() => handlePlay(mockGame2.id)} />
                <SelectionElement game={mockGame3} onPlay={() => handlePlay(mockGame3.id)} />
                <SelectionElement game={mockGame4} onPlay={() => handlePlay(mockGame4.id)} />
                <SelectionElement game={mockGame5} onPlay={() => handlePlay(mockGame5.id)} />
            </div>
        </WhiteContainer >
    )
}