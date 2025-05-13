import { RegisterScreen } from './features/user/ui/RegisterScreen'
import { AuthProvider } from './features/user/ui/AuthProvider'
import './ui/styles/App.css'

function App() {

  return (
    <AuthProvider>
      <main>
        <RegisterScreen />
      </main>
    </AuthProvider>
  )
}

export default App
