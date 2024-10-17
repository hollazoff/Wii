import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Pult from '../components/Pult.jsx';
import ScreenOff from '../components/ScreenOff.jsx';
import Screenonstart from '../components/ScreeonStart.jsx';
import ScreenShop from '../components/ScreenShop.jsx';
import ScreenGame from "../components/ScreenGame.jsx";
import ScreenAchivment from "../components/ScreenAchivment.jsx";
import '../index.css';
import ScreenSettings from "../components/ScreenSettings.jsx";



createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ScreenSettings />
        <Pult />
    </StrictMode>
);