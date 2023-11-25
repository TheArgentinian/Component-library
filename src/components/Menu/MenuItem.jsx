import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuItem({children}){
   const {handleClick} = useContext(MenuContext)
   
   return (
    <div onClick={() => handleClick(children)}>
      {children}
      </div>   
   ) 
}