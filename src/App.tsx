import { useEffect, useRef } from 'react'
import { AppRouter } from './router'
import { useAppDispatch, useAppSelector } from './store/hooks';
import { VisuallyImpairedControl } from './ui/components/service/VisuallyImpairedControl';
import { CONFIG } from './config';
import Popup from './ui/components/service/Popup';
import { openPopup } from './features/settings/slices/popupSlice';

function App() {
  const dispatch = useAppDispatch()
  const { full_screen_mode, visual_impaired_mode } = useAppSelector(state => state.settings)

  const documentElement = useRef(document.documentElement)
  const { register } = useAppSelector(state => state.user)

  useEffect(() => {
    if (register.success) {
      dispatch(openPopup({ text: "Вы успешно авторизовались" }))
    }
  }, [register.success])

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
      <Popup />
      <VisuallyImpairedControl />
      <AppRouter />
    </main>
  )
}

export default App
