import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Pult from '../components/Pult.jsx';
import '../index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Pult/>
    </StrictMode>
);