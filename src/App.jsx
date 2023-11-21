import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu/Menu'
import Badge from './components/badges'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu>
    <Menu.Button>Menu</Menu.Button>
    <Menu.Dropdown/>
    </Menu>
      <Badge />
    </>
  )
}

export default App
