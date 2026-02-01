import React, { useEffect } from 'react'
import Intro from './components/intro'

function App() {
  useEffect(() => {
  document.body.style.overflow = "hidden";
}, []);

  return (
    <>
    <Intro/>
    <div className='bg-gray-900 w-screen h-screen'>app</div>
    </>
  )
}

export default App