import {actcard} from '../data/PultLogic.js'
import fonepustcard from '../assets/fonepustcard.svg'
import mario from '../assets/mariocard.png'
import profil from '../assets/profil.png'
import settings from '../assets/settings.png'
import device from '../assets/technikal.png'
import shop from '../assets/shop.png'
import achivment from '../assets/achivment.png'
import panel from '../assets/panel.png'
import '../App.css'

function ScreeonStart() {

    return (
        <>
            <div
                className="screenonstart w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"screen-block pt-[20px] flex flex-wrap justify-between px-[95px] gap-[7px]"}>
                    <img id={3} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 1 ? `activ` : ''} `}
                         src={mario}/>
                    <img id={4} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 2 ? `activ` : ''} `}
                         src={profil}/>
                    <img id={5} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 3 ? `activ` : ''} `}
                         src={shop}/>
                    <img id={6} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 4 ? `activ` : ''} `}
                         src={achivment}/>
                    <img id={7} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 5 ? `activ` : ''} `}
                         src={settings}/>
                    <img id={8} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 6 ? `activ` : ''} `}
                         src={device}/>
                    <img id={9} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 7 ? `activ` : ''} `}
                         src={fonepustcard}/>
                    <img id={10} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 8 ? `activ` : ''} `}
                         src={fonepustcard}/>
                    <img id={11} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 9 ? `activ` : ''} `}
                         src={fonepustcard}/>
                    <img id={12} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 10 ? `activ` : ''} `}
                         src={fonepustcard}/>
                    <img id={13} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 11 ? `activ` : ''} `}
                         src={fonepustcard}/>
                    <img id={14} className={`card w-[144px] h-[86px] rounded-lg ${actcard === 12 ? `activ` : ''} `}
                         src={fonepustcard}/>
                </div>
                <p className={'screen-text text-3xl text-center text-gray-600 absolute top-[304px] left-[365px]'}>14:13</p>
                <img className={'screen-panel mt-[-30px] w-[100vw] h-[95px] absolute top-[340px]'} src={panel}/>
                <p className={'screen-text text-2xl absolute text-center font-bold text-gray-600 top-[355px] left-[369px] opacity-80'}>16/10</p>
            </div>
        </>
    )
}

export default ScreeonStart
