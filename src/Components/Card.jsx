import { useContext, useState } from "react";
import Share from "./Share";
import { CartContext } from "../Store/ContextProvide";


const Card=({img,name,content,shoeData})=>{
    
  const {dispatch} = useContext(CartContext) 
  
  const [isInCart,setisInCart] = useState(false);
  const toggleCart=()=>{
    setisInCart(!isInCart);
  }

    return <>
        
        <div className="products">
            <img src={img} alt="" />
            <div className="content">
            {content}
            </div>
            <h4>{name}</h4>
            <h4>${shoeData.price}</h4>
            <Share></Share>
            <button style={{backgroundColor: isInCart ? "green": "#D01C28"}} onClick={()=> {
              dispatch({type:"Add", shoeData:shoeData}); toggleCart()}}
              >{isInCart ? "✔ Added" : "🛒 Add to Cart"}</button>
        </div>
        {/* onClick={toggleCart} */}
    </>
}

export default Card;