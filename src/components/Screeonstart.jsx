import { useState } from 'react'
import fonepustcard from '../assets/fonepustcard.svg'
import panel from '../assets/panel.svg'
import '../App.css'

function Screeonstart() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div
                className="screenonstart w-[792px] h-[456px] bg-gray-200 transform translate-x-[564px] translate-y-[65px]">
                <div className={"screen-block pt-[25px] flex flex-wrap justify-between px-[70px] gap-[10px]"}>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                    <img className={'card w-[154px] h-[91px] '} src={fonepustcard}/>
                </div>
                <p className={'screen-text text-4xl text-center text-gray-600 mt-[17px]'}>14:13</p>
                <img className={'screen-panel mt-[-20px]'} src={panel}/>
                <p className={'screen-text text-3xl relative text-center font-bold text-gray-600 top-[-56px] opacity-80'}>16/10</p>
            </div>


        </>
    )
}

export default Screeonstart
