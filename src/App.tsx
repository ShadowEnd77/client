import { useEffect } from 'react'
import { AppRouter } from './router'
import { RegisterScreen } from './features/user/ui/screens/RegisterScreen';

function App() {
  useEffect(() => {
    console.log("render");

  }, [])
  return (
    <main>
      <AppRouter />
    </main>
  )
}

export default App
