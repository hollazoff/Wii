import { useState } from 'react'
import panel from '../assets/panel.png'
import {achivment1} from '../data/Achivment.js'
import {achivment2} from '../data/Achivment.js'
import {achivment3} from '../data/Achivment.js'
import {achivment4} from '../data/Achivment.js'
import {achivment5} from '../data/Achivment.js'
import {achivment6} from '../data/Achivment.js'
import {achivment7} from '../data/Achivment.js'
import {achivment8} from '../data/Achivment.js'
import {achivment9} from '../data/Achivment.js'
import {achivment10} from '../data/Achivment.js'
import {achivment11} from '../data/Achivment.js'
import {achivment12} from '../data/Achivment.js'

import '../App.css'

function ScreenAchivment() {


    return (
        <>
            <div
                className="screenonstart  w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"achivment-block relative top-[20px] text-black mx-[64px] bg-gray-300 flex flex-wrap justify-between rounded-xl flex-col px-[42px] py-[15px]"}>
                    <p className={"achivment-tex font-bold text-2xl"}>Достижения</p>
                    <div className={"achivments py-[20px] flex items-center flex-wrap justify-between gap-[18px]"}>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment1.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment1.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment2.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment2.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment3.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment3.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment4.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment4.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment5.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment5.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment6.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment6.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment7.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment7.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment8.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment8.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment9.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment9.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment10.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment10.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment11.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment11.Percent}%</span>
                        </div>
                        <div className={"achivment flex gap-[10px]"}>
                            <p className={"achivment-text font-semibold text-xl"}>{achivment12.Name} -</p>
                            <span className={"achivment-procent font-bold text-xl"}>{achivment12.Percent}%</span>
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
