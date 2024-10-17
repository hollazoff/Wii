import { useState } from 'react'
import { user } from '../data/User.js'
import { friend1 } from '../data/Friend.js'
import { friend2 } from '../data/Friend.js'
import { friend3 } from '../data/Friend.js'
import { friend4 } from '../data/Friend.js'

import panel from '../assets/panel.png'
import friendstatus from '../assets/friendststus.png'
import '../App.css'

function ScreenProfil() {


    return (
        <>
            <div
                className="screenprofil w-[792px] h-[405px] bg-gray-200 transform translate-x-[564px] translate-y-[165px]">
                <div className={"blockB    rounded-[12px]  flex-wrap justify-between pt-[29px] pl-[64px] gap-[7px]"}>
                    <div
                        className={"block w-[663px] h-[252px]  flex bg-[#D5D5D5] rounded-[12px]   flex-wrap justify-between  gap-[7px]"}>

                        <div className={"block-left pl-[30px] pt-[16px]"}>
                            <p className={"left-title text-3xl font-semibold text-black pb-[36px]"}>Аккаунт</p>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Никнейм:</p>
                                <p className={"row-data ml-[20px] flex justify-center items-center w-[131px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>{user.Nickname}</p>
                            </div>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Уровень:</p>
                                <p className={"row-data ml-[25px] flex justify-center items-center w-[131px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>{user.Level}</p>
                            </div>
                            <div className={"left-row flex pb-[17px] items-center"}>
                                <p className={"row-title text-lg text-black"}>Игр:</p>
                                <p className={"row-data ml-[64px] flex justify-center items-center w-[131px] h-[36px] bg-[#E8E8E8] rounded-[12px]  text-black outline outline-[#64BBD8] outline-1"}>{user.Games}</p>
                            </div>

                        </div>
                        <div className={"block-right pr-[30px] pt-[16px] w-[275px] flex flex-col items-end"}>
                            <p className={"right-balance text-lg text-black bg-[#64BBD8] flex justify-center items-center w-[159px] h-[33px] rounded-[12px]"}>Баланс: {user.Balance} </p>
                            <p className={"right-title text-2xl text-black pr-[82px] pt-[35px]"}>Друзья:</p>
                            <div
                                className={"friends pt-[24px] flex flex-wrap justify-between items-center h-[113px] content-between"}>
                                <div
                                    className={"friend flex items-center justify-between  w-[115px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>{friend1.Nickname}</p>
                                    <img className={"friend-img pr-[10px]"} src={friendstatus}/>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[115px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>{friend2.Nickname}</p>
                                    <img className={"friend-img pr-[10px]"} src={friendstatus}/>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[115px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>{friend3.Nickname}</p>
                                    <img className={"friend-img pr-[10px]"} src={friendstatus}/>
                                </div>
                                <div
                                    className={"friend flex items-center justify-between  w-[115px] h-[36px] bg-[#E8E8E8] rounded-[12px] outline outline-[#64BBD8] outline-1"}>
                                    <p className={"friend-title text-black pl-[10px]"}>{friend4.Nickname}</p>
                                    <img className={"friend-img pr-[10px]"} src={friendstatus}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={"screen-text  text-center text-gray-600 flex ml-[250px] mt-[17px] "}>
                    <p className={"row-title text-2xl text-black"}>Достижения:</p>
                    <p className={"row-data ml-[20px] text-xl flex justify-center items-center w-[131px] h-[36px] bg-[#D9D9D9] rounded-[12px]  text-black"}>{user.Achivment}/12</p>
                </div>

                <img className={'screen-panel mt-[-25px] w-[100vw] h-[95px]'} src={panel}/>

            </div>


        </>
    )
}

export default ScreenProfil