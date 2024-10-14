import { useState } from 'react'
import fon from "./assets/fon.png"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
          backgroundImage: `url(${fon})`,

          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '1920px',
          height: '960px',
      }} className='bg'>

      </div>



    </>
  )
}

export default App
