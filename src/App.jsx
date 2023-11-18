import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from './components/badges'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Badge />
    </>
  )
}

export default App
