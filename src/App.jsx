import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Index'
import MenuDropdown from './components/Menu/MenuDropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu>
    <Menu.Button>Menu</Menu.Button>
    <MenuDropdown>
    <Menu.Item>Badges</Menu.Item>
    <Menu.Item>Banners</Menu.Item>
    <Menu.Item>Cards</Menu.Item>
    <Menu.Item>Testimonials</Menu.Item>
    </MenuDropdown>
    </Menu>
    </>
  )
}

export default App
