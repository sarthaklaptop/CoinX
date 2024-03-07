import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import GetStarted from './components/GetStarted'
import Information from './Information'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' h-[100vh]'>
      <Navbar/>

      <div className='bg-[#D9D9D9]'>
        <div className='  lg:flex gap-2 lg:w-11/12 py-4 mx-auto'>
          <Information className=""/>
          <GetStarted className=""/>
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default App
