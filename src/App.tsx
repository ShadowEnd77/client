import { useEffect } from 'react'
import { AppRouter } from './router'
import { SurveyScreen } from './features/user/ui/screens/SurveyScreen';

function App() {
  useEffect(() => {
    console.log("render");

  }, [])
  return (
    <main>
      {/* <AppRouter /> */}
      <SurveyScreen />
    </main>
  )
}

export default App
