import { MenuContext } from "./Menu"
import { useContext } from "react"

export default function MenuButton({children}){
    const {toggleOpen} = useContext(MenuContext)
    return (
        <button onClick={toggleOpen}>{children}</button>
    )
}