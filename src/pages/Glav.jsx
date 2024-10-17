import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Pult from '../components/Pult.jsx';
import ScreenOff from '../components/ScreenOff.jsx';
import Screenonstart from '../components/ScreeonStart.jsx';
import ScreenProfil from "../components/ScreenProfil.jsx";
import ScreenSettings from "../components/ScreenSettings.jsx";
import ScreenDevice from "../components/ScreenDevice.jsx";
import '../index.css';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ScreenSettings />
        <Pult />
    </StrictMode>
);