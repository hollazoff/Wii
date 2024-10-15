import { useState } from 'react'
import btnstart from '../assets/btnstart.png'
import bigbtn from '../assets/bigbtn.png'
import home from '../assets/home.png'
import keyone from '../assets/key1.png'
import keytwo from '../assets/key2.png'
import krestovina from '../assets/krestovinabtn.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import '../App.css'

function Pult() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="pult-container absolute left-[1444px] top-[425px] rotate-[-9deg]">
                <img className={'btnstart '} src={btnstart} alt="btnstart"/>
                <img className={'bigbtn relative top-[100px] left-[20px]'} src={bigbtn} alt="bigbtn"/>
                <img className={'home relative top-[150px] left-[27px]'} src={home} alt="home"/>
                <img className={'keyone relative top-[252px] left-[20px]'} src={keyone} alt="keyone"/>
                <img className={'keytwo relative top-[267px] left-[20px]'} src={keytwo} alt="keytwo"/>
                <img className={'krestovina relative top-[-85px] left-[12px] rotate-[2deg]'} src={krestovina} alt="krestovina"/>
                <img className={'krestovina relative top-[-105px] left-[49px] rotate-[2deg]'} src={krestovina} alt="krestovina"/>
                <img className={'krestovina relative top-[-109px] left-[30px] rotate-[90deg]'} src={krestovina} alt="krestovina"/>
                <img className={'krestovina relative top-[-167px] left-[31px] rotate-[-90deg]'} src={krestovina} alt="krestovina"/>
                <img className={'minus relative top-[-14px] left-[-5px]'} src={minus} alt="minus"/>
                <img className={'plus relative top-[-34px] left-[61px]'} src={plus} alt="plus"/>
            </div>


        </>
    )
}

export default Pult
