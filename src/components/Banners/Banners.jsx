import Banner from "./Banner";

export default function Banners(){
    return (
        <>
        <h1>Banners</h1>
    <Banner 
                status="success" 
                title="Congratulations!" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
                <Banner 
                status="warning" 
                title="Attention" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                <Banner 
                status="error" 
                title="There is a problem with your application" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum." />
                <Banner 
                status="neutral" 
                title="Update available" 
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." />
                </>
                )
}