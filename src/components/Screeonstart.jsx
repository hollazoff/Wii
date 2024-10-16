import { useState } from 'react'
import fonepustcard from '../assets/fonepustcard.svg'
import mario from '../assets/mario.png'
import profil from '../assets/profil.png'
import settings from '../assets/settings.png'
import panel from '../assets/panel.png'
import '../App.css'

function Screeonstart() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div
                className="screenonstart hidden w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"screen-block pt-[20px] flex flex-wrap justify-between px-[95px] gap-[7px]"}>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={profil}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={mario}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={settings}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                </div>
                <p className={'screen-text text-3xl text-center text-gray-600 mt-[12px]'}>14:13</p>
                <img className={'screen-panel mt-[-30px] w-[100vw] h-[95px]'} src={panel}/>
                <p className={'screen-text text-2xl relative text-center font-bold text-gray-600 top-[-50px] opacity-80'}>16/10</p>
            </div>


        </>
    )
}

export default Screeonstart
