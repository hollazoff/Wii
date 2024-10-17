import {useState} from 'react'



import panel from '../assets/panel.png'
import setminus from '../assets/setminus.png'
import setplus from '../assets/setplus.png'


import '../App.css'



function ScreenSettings() {


    return (
        <>
            <div
                className="screenprofil w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"blockB    rounded-[12px]  flex-wrap justify-between pt-[29px] pl-[64px] gap-[7px]"}>
                    <div
                        className={"block w-[663px] h-[252px]  flex bg-[#D5D5D5] rounded-[12px]   flex-wrap justify-between  gap-[7px]"}>

                        <div className={"block-left pl-[30px] pt-[16px]"}>
                            <p className={"left-title text-3xl font-semibold text-black pb-[36px]"}>Настройки</p>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Яркость:</p>
                                <div
                                    className={"row-data ml-[20px] flex justify-between items-center w-[520px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>
                                    <img src={setminus} alt="setminus" className="rounded-[12px] pl-[10px]"/>
                                    <p className={"left-title text-lg font-semibold text-black "}>50%</p>
                                    <img src={setplus} alt="setplus" className="rounded-[12px] pr-[10px]"/>
                                </div>

                            </div>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Звук:</p>
                                <div
                                    className={"row-data ml-[48px] flex justify-between items-center w-[520px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>
                                    <img src={setminus} alt="setminus" className="rounded-[12px] pl-[10px]"/>
                                    <p className={"left-title text-lg font-semibold text-black "}>50%</p>
                                    <img src={setplus} alt="setplus" className="rounded-[12px] pr-[10px]"/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <img className={'screen-panel mt-[29px] w-[100vw] h-[95px]'} src={panel}/>
            </div>


        </>
    )
}

export default ScreenSettings