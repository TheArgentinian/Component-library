import {createContext} from 'react'
import { useState } from 'react'

const MenuContext = createContext()
export {MenuContext}

export default function Menu({children}){
const [open, setOpen] = useState(true)

return(
    <MenuContext.Provider>
    <div className="menu">
        {children}
    </div>
    </MenuContext.Provider>
)

}  