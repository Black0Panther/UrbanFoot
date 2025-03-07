import { useNavigate } from "react-router-dom";

const Shopnowtwo=()=>{
    const nav=useNavigate();
    const handlenav=()=>{
        nav('/Mainproducts');
    }
    return <>
             <div className="shopnowtwo_container">
                <h2>Featured Collection</h2>
                <div className="featured">
                    <img src="/images/shoe5.jpg" alt="" />
                    <img src="/images/shoe_featured.jpg" alt="" />
                </div>
                <div className="shop_now">
                 <img src="/images/shoe12.jpg" alt="" />
                 <div className="shop_now_content">
                    <h4>New Arrival</h4>
                    <p>Fresh style from your favorite brands</p>
                    <button onClick={handlenav}>Shop Now</button>
                 </div>
                </div>
             </div>
    </>
}
export default Shopnowtwo;