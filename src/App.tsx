import { useEffect } from 'react'
import { AppRouter } from './router'
import { RegisterScreen } from './features/user/ui/screens/RegisterScreen';
import { GameLayout } from './features/game/ui/GameLayout';
import { useAppDispatch } from './store/hooks';
import { getGameInfoById } from './features/game/slices/game-info/gameInfoSlice';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGameInfoById({id: 1}));
  }, [])
  return (
    <main>

      <AppRouter />
    </main>
  )
}

export default App
