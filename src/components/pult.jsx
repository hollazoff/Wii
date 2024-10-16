import { useState } from 'react'
import btnstart from '../assets/btnstart.png'
import bigbtn from '../assets/bigbtn.png'
import home from '../assets/home.png'
import keyone from '../assets/key1.png'
import keytwo from '../assets/key2.png'
import krestovina from '../assets/krestovinabtn.png'
import minus from '../assets/minus.png'
import plus from '../assets/plus.png'
import palec from '../assets/palec.png'
import '../App.css'

function Pult() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="pult-container transform translate-x-[1450px] translate-y-[413px] w-[140px] rotate-[-9deg]">
                <img className={'palec absolute transform translate-x-[41px] translate-y-[105px]  z-[2]'} src={palec} alt="plus"/>
                <img className={'btnstart cursor-pointer'} src={btnstart} alt="btnstart"/>

                <img className={'bigbtn relative top-[98px] left-[19px] cursor-pointer z-[1]'} src={bigbtn} alt="bigbtn"/>
                <img className={'home relative top-[149px] left-[27px] cursor-pointer'} src={home} alt="home"/>
                <img className={'keyone relative top-[250px] left-[20px] cursor-pointer'} src={keyone} alt="keyone"/>
                <img className={'keytwo relative top-[263px] left-[20px] cursor-pointer'} src={keytwo} alt="keytwo"/>
                <img className={'krestovina relative top-[-85px] left-[12px] rotate-[2deg] cursor-pointer'}
                     src={krestovina} alt="krestovina"/>
                <img className={'krestovina relative top-[-105px] left-[49px] rotate-[2deg] cursor-pointer'}
                     src={krestovina} alt="krestovina"/>
                <img className={'krestovina relative top-[-109px] left-[30px] rotate-[90deg] cursor-pointer'}
                     src={krestovina} alt="krestovina"/>
                <img className={'krestovina relative top-[-167px] left-[31px] rotate-[-90deg] cursor-pointer'}
                     src={krestovina} alt="krestovina"/>
                <img className={'minus relative top-[-16px] left-[-6px] cursor-pointer'} src={minus} alt="minus"/>
                <img className={'plus relative top-[-35px] left-[61px] cursor-pointer'} src={plus} alt="plus"/>
            </div>


        </>
    )
}

export default Pult
