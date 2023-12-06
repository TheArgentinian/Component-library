export default function Banner({status, title, description}){
    return(
        <>
        <div className="status">{status}</div>
        <div className="banner-box">
        <div className="title">{title}</div> 
        <div className="description">{description}</div>
        </div>  
        </>
    )
}