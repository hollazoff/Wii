import { useState } from 'react'
import fonepustcard from '../assets/fonepustcard.svg'
import mario from '../assets/mariocard.png'
import profil from '../assets/profil.png'
import settings from '../assets/settings.png'
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
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={mario}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={profil}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={settings}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={shop}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={achivment}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                    <img className={'card w-[144px] h-[86px] rounded-lg'} src={fonepustcard}/>
                </div>
                <p className={'screen-text text-3xl text-center text-gray-600 absolute top-[304px] left-[365px]'}>14:13</p>
                <img className={'screen-panel mt-[-30px] w-[100vw] h-[95px] absolute top-[340px]'} src={panel}/>
                <p className={'screen-text text-2xl absolute text-center font-bold text-gray-600 top-[355px] left-[369px] opacity-80'}>16/10</p>
            </div>


        </>
    )
}

export default ScreeonStart
