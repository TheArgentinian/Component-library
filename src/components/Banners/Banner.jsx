export default function Banner({status, title, description}){
    return(
        <>
        <div className="banner-status">{status}</div>
        <div className={`bannerBox-${status}`}>
            <div className="banner-title">{title}</div> 
            <div className="banner-description">{description}</div>
        </div>  
        </>
    )
}