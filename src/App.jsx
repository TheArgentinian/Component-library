import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Index'
import MenuDropdown from './components/Menu/MenuDropdown'
import Badges from './components/Badges/Badges'
import Banners from './components/Banners/Banners'
import Cards from './components/Cards/Cards'
import Testimonials from './components/Testimonials/Testimonials'


function App() {
  const [component, setComponent] = useState("Home")

  return (
    <>
    <Menu setComponent={setComponent}>
    <Menu.Button>Menu</Menu.Button>
    <MenuDropdown>
    <Menu.Item>Badges</Menu.Item>
    <Menu.Item>Banners</Menu.Item>
    <Menu.Item>Cards</Menu.Item>
    <Menu.Item>Testimonials</Menu.Item>
    </MenuDropdown>
    </Menu>

    <div>
    {component === "Badges" && 
    <Badges/>
     }
    </div>

    <div>
      {component === "Banners"? 
      <Banners/>: null} 
    </div>

    <div>
      {component === "Cards"? 
      <Cards/>: null}
    </div>

    <div>
      {component === "Testimonials" ?
      <Testimonials/> : null}
    </div>
    </>
  )
}

export default App
