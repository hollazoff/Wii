import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pult from '../components/pult.jsx'
import Screenoff from '../components/Screenoff.jsx'
import Screenonstart from '../components/Screeonstart.jsx'

import '../index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Pult />
        <Screenoff />
        <Screenonstart />
    </StrictMode>,
)