import { useEffect, useRef } from 'react'
import { AppRouter } from './router'
import { useAppSelector } from './store/hooks';
import { VisuallyImpairedControl } from './ui/components/service/VisuallyImpairedControl';
import { CONFIG } from './config';

function App() {
  const { full_screen_mode, visual_impaired_mode } = useAppSelector(state => state.settings)
  const documentElement = useRef(document.documentElement)

  useEffect(() => {
    if (documentElement.current) {
      if (!full_screen_mode) {
        document.exitFullscreen()
        return
      }
      documentElement.current?.requestFullscreen()
    }
  }, [full_screen_mode])

  useEffect(() => {
    if (documentElement.current) {
      if (!visual_impaired_mode) {
        documentElement.current.style.setProperty('--fz-scale', `${1}`)
        return
      }
      documentElement.current.style.setProperty('--fz-scale', `${CONFIG.VISUAL_IMPAIRED_VALUE}`)
    }
  }, [visual_impaired_mode])

  return (
    <main>
      <VisuallyImpairedControl />
      <AppRouter />
    </main>
  )
}

export default App
