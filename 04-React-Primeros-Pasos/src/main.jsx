// ? Importaciones
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// ? Estilos
import './index.css'

// ? Componentes
import PropTypesComponent from './Components/PropTypesComponent.jsx'
import Contador from './Components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PropTypesComponent nombre='AnderCMD' titulo='Como te encuentras?'/> */}
    <Contador />
  </StrictMode>,
)
