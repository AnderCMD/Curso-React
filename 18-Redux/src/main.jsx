// ? Importaciones
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

// ? Redux
import { store } from './Store/Store.js'

// ? Estilos
import './index.css'

// ? Componentes
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
