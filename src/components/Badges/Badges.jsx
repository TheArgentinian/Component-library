import Badge from "./Badge"

export default function Badges(){
    return (
    <div>
        <h1>Badges</h1>
        <h2>Square</h2>
        <Badge type="square" color="grey">Gray</Badge>
        <Badge type="square" color="red">Red</Badge>
        <Badge type="square" color="yellow">Yellow</Badge>
        <Badge type="square" color="green">Green</Badge>       
        <Badge type="square" color="blue">Blue</Badge>        
        <Badge type="square" color="indigo">Indigo</Badge>
        <Badge type="square" color="purple">Purple</Badge>
        <Badge type="square" color="pink">Pink</Badge>
    <div>
        <h2>Pill</h2>
        <Badge type="pill" color="grey">Gray</Badge>
        <Badge type="pill" color="red">Red</Badge>
        <Badge type="pill" color="yellow">Yellow</Badge>
        <Badge type="pill" color="green">Green</Badge>       
        <Badge type="pill" color="blue">Blue</Badge>        
        <Badge type="pill" color="indigo">Indigo</Badge>
        <Badge type="pill" color="purple">Purple</Badge>
        <Badge type="pill" color="pink">Pink</Badge>
    </div>

    </div>
    )
}