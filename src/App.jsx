import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './assets/componentes/Cards'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cards/>
      <h1>Esteban Soto Vite+React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VkC8Iz7Y1u0?si=DVqpYrHZgzAfuOT1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </>
  )
}

export default App
