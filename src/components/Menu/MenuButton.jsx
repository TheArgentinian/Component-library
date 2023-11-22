export default function MenuButton({children, ...rest}){
    return (
        <button {...rest}>{children}</button>
    )
}