import { useState } from 'react'
import Calculadora from './assets/components/Calculadora'



function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='flex items-center justify-center w-full h-screen bg-slate-400'>  
      <Calculadora/>
    </section>
  )
}

export default App
