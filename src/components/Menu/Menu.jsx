import {createContext} from 'react'
import useToggle from '../../hooks/useToggle'

const MenuContext = createContext()
export {MenuContext}

export default function Menu({children, setComponent}){
const [open, toggleOpen] = useToggle()

function handleClick(option){
    setComponent(option)
}

return(
    <MenuContext.Provider value={{open, toggleOpen, handleClick}}>
    <div className="menu">
        {children}
    </div>
    </MenuContext.Provider>
)

}  