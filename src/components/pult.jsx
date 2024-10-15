import { useState } from 'react'
import btnstart from '../assets/btnstart.png'
import '../App.css'

function Pult() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="pult-container absolute left-[100px]">
                <img className={'btnstart '} src={btnstart} alt="btnstart"  />
            </div>



        </>
    )
}

export default Pult
