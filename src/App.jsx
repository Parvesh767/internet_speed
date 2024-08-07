import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Speed from './components/Speed'
import { TopLamp } from './pages/TopLamp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     <TopLamp />
    </div>
  )
}

export default App
