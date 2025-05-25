import { useEffect } from 'react'
import { AppRouter } from './router'

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
