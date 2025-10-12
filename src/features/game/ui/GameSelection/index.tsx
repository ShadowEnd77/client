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
import { api } from '../../../../api/instance';
import { API_PATHS } from '../../../../api/paths';
import { CONFIG } from '../../../../config';
import { resetGameInProgress, resetPassedGameData } from '../../slices/game-info/gameInfoSlice';

export const GameSelectionScreen = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [pendingGameId, setPendingGameId] = useState<number | null>(null);
    const [isNavigating, setIsNavigating] = useState(false);
    const gameLoading = useAppSelector(state => state.game.statuses.loading);
    const gameLoaded = useAppSelector(state => state.game.statuses.success);

    // List of games to display. In mock mode we'll populate with mocks; in DB mode we'll fetch from API
    const [gamesList, setGamesList] = useState<any[]>([]);

    useEffect(() => {
        let mounted = true;

        if (CONFIG.USE_MOCK_API) {
            setGamesList([mockGame1, mockGame2, mockGame3, mockGame4, mockGame5]);
            return;
        }

        const fetchGames = async () => {
            try {
                const res = await api.get(API_PATHS.GET_GAMES);
                const data: any[] = res.data || [];
                if (!mounted) return;
                // Use the DB-provided list as-is — number and order reflect DB
                setGamesList(data);
            } catch (e) {
                // On error, show empty list (DB mode should not show mocks)
                if (!mounted) return;
                setGamesList([]);
                console.error('Failed to fetch games list', e);
            }
        };

        fetchGames();

        return () => { mounted = false };
    }, []);

    const handlePlay = async (gameId: number) => {
        if (isNavigating) return; // Защита от повторных кликов
        
        setIsNavigating(true);
        setPendingGameId(gameId);
        
        // Сбрасываем состояния
        dispatch(resetGameInProgress());
        dispatch(resetPassedGameData());
        
        // Загружаем информацию об игре
        await dispatch(getGameInfoById({ id: gameId, include_details: true }));
    };

    useEffect(() => {
        if (pendingGameId !== null && !gameLoading && gameLoaded && isNavigating) {
            // Используем replace вместо push чтобы избежать накопления истории
            navigate(ROUTER.PATHS.GAME_INFO, { replace: true });
            setPendingGameId(null);
            setIsNavigating(false);
        }
    }, [pendingGameId, gameLoading, gameLoaded, isNavigating, navigate]);

    // Сброс состояния навигации при размонтировании компонента
    useEffect(() => {
        return () => {
            setIsNavigating(false);
            setPendingGameId(null);
        };
    }, []);

    return (
        <WhiteContainer className={styles.section}>
            <header className={styles.header}>
                <h1 className={`${styles.title}`}>Все игры</h1>
                <img src={logoIcon} height={20} width={63} alt="Логотип" />
            </header>
            <div className={styles.SelectionGameList}>
                {gamesList.map(g => (
                    <SelectionElement key={g.id} game={g} onPlay={() => handlePlay(g.id)} />
                ))}
            </div>
        </WhiteContainer >
    )
}