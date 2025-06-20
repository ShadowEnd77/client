import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import { BrowserRouter } from "react-router";
import App from './App.tsx';
import './styles/index.scss';
import { GameLayout } from './features/game/ui/GameLayout/index.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
