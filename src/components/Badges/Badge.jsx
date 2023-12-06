export default function Badge({children, type, color}){
    const badgeStyle = `badge ${type} ${color}`
    console.log(badgeStyle)

    return (
        <div className={badgeStyle}>{children}</div>
    )
}