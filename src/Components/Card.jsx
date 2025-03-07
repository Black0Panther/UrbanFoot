import { useContext, useEffect, useState } from "react";
import Share from "./Share";
import { CartContext } from "../Store/ContextProvide";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Signup from "../Pages/Signup";
import Signupwarning from "./Signupwarning";
// below line for bootstrap js 
import * as bootstrap from "bootstrap";

const auth = getAuth(app);

const Card=({img,name,content,shoeData})=>{
  // it will store user state for login or not
  const [User,setUser]=useState(null);  
  useEffect( ()=>{
    onAuthStateChanged(
      auth,
      (currentuser)=>{
        setUser(currentuser);
      }
    );
    
  } , []
);


  const {dispatch} = useContext(CartContext) 
  // below function for making it green add to cart to added
  const [isInCart,setisInCart] = useState(false);
  

  const toggleCart=()=>{
   
    if(!User){
  
      const modal = new bootstrap.Modal(document.getElementById("signupModal"));
      modal.show();
    }
    else{
      setisInCart(!isInCart);
      dispatch({type:"Add", shoeData:shoeData});
    }
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
            {/* <button style={{backgroundColor: isInCart ? "green": "#D01C28"}} onClick={()=> {
              dispatch({type:"Add", shoeData:shoeData}); toggleCart()}} */}
              <button  style={{backgroundColor: isInCart ? "green": "#D01C28"}} onClick={()=> {
               toggleCart()}}
              >{isInCart ? "✔ Added" : "🛒 Add to Cart"}</button>
        </div>
        {/* onClick={toggleCart} */}
{/* Signup pop up code */}
{/* {ShowPop && (
          <Signupwarning/>
        )} */}
         <Signupwarning/>


        
    </>
}

export default Card;