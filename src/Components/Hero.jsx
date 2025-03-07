import { Link } from "react-router-dom";
const Hero=()=>{

    return <>
    <div className="Hero">
        <div className="Hero_content">
           <h1>YOUR FEET DESERVE THE BEST</h1>
          
           <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
           

           <div className="Hero_btn">
         <Link to={'/Mainproducts'}> <button >Shop Now</button></Link> 
           <button className="secondary_btn">Category</button>
           </div>
           <p>Also Available On</p>
        <div className="ecommerce">
            <img src="/images/flipkart.png" alt="" />
            <img src="/images/amazon.png" alt="" />
        </div>
        </div>
        
        <div className="Hero_img">
        <img src="/images/shoe_image.png" alt="" />
        </div>
        
      
    </div>
    
    </>



}

export default Hero;