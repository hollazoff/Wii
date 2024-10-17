import { useState } from 'react'
import panel from '../assets/panel.png'
import '../App.css'

function ScreenAchivment() {


    return (
        <>
            <div
                className="screenonstart  w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"achivment-block relative top-[20px] mx-[64px] bg-gray-300 flex flex-wrap justify-between rounded-xl flex-col px-[42px] py-[15px]"}>
                    <p className={"achivment-tex font-bold text-2xl"}>Достижения</p>
                    <div className={"achivments py-[20px] flex items-center flex-wrap justify-between gap-[18px]"}>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>Прыгнуище -</p>
                            <span className={"achivment-procent font-bold text-xl"}>89%</span>
                        </div>
                    </div>

                </div>
                <p className={'screen-text text-3xl text-center text-gray-600 absolute top-[304px] left-[365px]'}>14:13</p>
                <img className={'screen-panel mt-[-30px] w-[100vw] h-[95px] absolute top-[340px]'} src={panel}/>
                <p className={'screen-text text-2xl absolute text-center font-bold text-gray-600 top-[355px] left-[369px] opacity-80'}>16/10</p>
            </div>


        </>
    )
}

export default ScreenAchivment
