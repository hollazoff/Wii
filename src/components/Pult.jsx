import { useState } from 'react'
import { updateStatus, setstatus, status, actcard, checkcard, perehod } from '../data/PultLogic.js'
import ScreenOff from './ScreenOff.jsx';
import Screenonstart from './ScreeonStart.jsx';

import btnstart from '../assets/btnstart.png'
import bigbtn from '../assets/bigbtn.png'
import home from '../assets/home.png'
import keyone from '../assets/key1.png'
import keytwo from '../assets/key2.png'
import krestovina from '../assets/krestovinabtn.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import palec from '../assets/palec.png'

import '../App.css'
import ScreenGame from "./ScreenGame.jsx";
import ScreenShop from "./ScreenShop.jsx";
import ScreenAchivment from "./ScreenAchivment.jsx";
import ScreenProfil from "./ScreenProfil.jsx";
import ScreenSettings from "./ScreenSettings.jsx";
import ScreenDevice from "./ScreenDevice.jsx";




function Pult() {
    const [currentStatus, setCurrentStatus] = useState(status);
    const [currentActcard, setCurrentActcard] = useState(actcard);


    const handleBtnStartClick = () => {
        updateStatus(setCurrentStatus);

    };
    const handleBtnhomeClick = () => {
        setstatus(setCurrentStatus, 2);
    };



    const rightActCard = () => {
        checkcard(setCurrentActcard, 1);
    };

    const leftActCard = () => {
        checkcard(setCurrentActcard, -1);
    };

    const downActCard = () => {
        checkcard(setCurrentActcard, 4);
    };

    const upActCard = () => {
        checkcard(setCurrentActcard, -4);
    };

    const enablecard = () => {
        perehod(setCurrentStatus);
    };

    return (
        <>
            <div className="pult-container absolute left-[1451px] top-[495px] rotate-[-9deg] ">
                <img className={'btnstart cursor-pointer'} src={btnstart} alt="btnstart" onClick={handleBtnStartClick} />
                <img className={'bigbtn relative top-[90px] left-[22px] z-[1] cursor-pointer'} src={bigbtn}
                     alt="bigbtn" onClick={enablecard}/>
                <img className={'home relative top-[135px] left-[30px] cursor-pointer'} src={home} alt="home" onClick={handleBtnhomeClick}/>
                <img className={'keyone relative top-[225px] left-[25px] cursor-pointer'} src={keyone} alt="keyone" />
                <img className={'keytwo relative top-[236px] left-[24px] cursor-pointer'} src={keytwo} alt="keytwo" />
                <img className={'krestovina relative top-[-89px] left-[12px] rotate-[2deg] cursor-pointer'}
                     src={krestovina}
                     alt="krestovina" onClick={leftActCard}/>
                <img className={'krestovina relative top-[-108px] left-[49px] rotate-[2deg] cursor-pointer'}
                     src={krestovina}
                     alt="krestovina" onClick={rightActCard}/>
                <img className={'krestovina relative top-[-115px] left-[30px] rotate-[90deg] cursor-pointer'}
                     src={krestovina}
                     alt="krestovina" onClick={downActCard}/>
                <img className={'krestovina relative top-[-169px] left-[31px] rotate-[-90deg] cursor-pointer'}
                     src={krestovina}
                     alt="krestovina" onClick={upActCard}/>
                <img className={'minus relative top-[-30px] left-[-4px] cursor-pointer'} src={minus} alt="minus"/>
                <img className={'plus relative top-[-50px] left-[63.3px] cursor-pointer'} src={plus} alt="plus"/>
            </div>
            <img className={'palec absolute left-[1490px] top-[580px]  rotate-[-11deg] z-[2] '} src={palec}
                 alt="plus"/>
            {/*{currentStatus === 2 ? <Screenonstart /> : <ScreenOff />}*/}

            {currentStatus === 2 ? <Screenonstart /> :
                currentStatus === 3 ? <ScreenGame /> :
                    currentStatus === 4 ? <ScreenProfil /> :
                        currentStatus === 5 ? <ScreenShop /> :
                            currentStatus === 6 ? <ScreenAchivment /> :
                                currentStatus === 7 ? <ScreenSettings /> :
                                    currentStatus === 8 ? <ScreenDevice /> :
                                        <ScreenOff />}
        </>
    )
}

export default Pult
