import { useEffect } from 'react'
import { AppRouter } from './router'
import { RegisterScreen } from './features/user/ui/screens/RegisterScreen';
import { GameLayout } from './features/game/ui/GameLayout';
import { useAppDispatch } from './store/hooks';
import { getGameInfoById } from './features/game/slices/game-info/gameInfoSlice';
import { GamePassed } from './features/game/ui/GamePassed';

function App() {
  const dispatch = useAppDispatch()
  return (
    <main>
      <AppRouter />
      {/* <GamePassed/> */}
    </main>
  )
}

export default App
