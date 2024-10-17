import { useState } from 'react'
import panel from '../assets/panel.png'
import marioshop from '../assets/shopmario.png'
import '../App.css'

function ScreenGame() {


    return (
        <>
            <div
                className="screenonstart  w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"screenshop-block relative top-[20px] mx-[64px] bg-gray-300 flex flex-wrap justify-between rounded-xl flex-col px-[42px] py-[15px]"}>
                    <p className={"screenshop-tex font-bold text-2xl"}>Об игре</p>
                    <div className={"games pt-[10px] flex justify-between items-center"}>
                        <img className={"game-img w-[184px] h-[171px] mt-[12px] mb-[10px] rounded-lg"} src={marioshop}/>
                        <p className={"game-text font-medium text-black text-sm w-[360px]"}>Super Mario - классическая игра, положившая начало целой серии. Игрок управляет Марио, который бегает, прыгает и собирает предметы, чтобы преодолевать препятствия и побеждать врагов. Несмотря на простую механику, игра отличалась высокой сложностью и увлекательным геймплеем. Яркая пиксельная графика, запоминающаяся музыка и харизматичные персонажи сделали эту игру культовой классикой своего времени. </p>
                    </div>

                </div>
                <p className={'screen-text text-3xl text-center text-gray-600 absolute top-[304px] left-[365px]'}>14:13</p>
                <img className={'screen-panel mt-[-30px] w-[100vw] h-[95px] absolute top-[340px]'} src={panel}/>
                <p className={'screen-text text-2xl absolute text-center font-bold text-gray-600 top-[355px] left-[369px] opacity-80'}>16/10</p>
            </div>


        </>
    )
}

export default ScreenGame
