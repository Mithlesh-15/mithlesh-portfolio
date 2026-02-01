import React, { useEffect } from 'react'
import Intro from './components/intro'

function App() {
  useEffect(() => {
  document.body.style.overflow = "hidden";
}, []);

  return (
    <>
    <Intro/>
    <div className='bg-green-800 w-screen h-screen'>app</div>
    </>
  )
}

export default App