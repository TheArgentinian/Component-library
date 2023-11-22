import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Menu>
    <Menu.Button>Menu</Menu.Button>
    <Menu.Item>Badges</Menu.Item>
    <Menu.Item>Banners</Menu.Item>
    <Menu.Item>Cards</Menu.Item>
    <Menu.Item>Testimonials</Menu.Item>
    </Menu>
    </>
  )
}

export default App
