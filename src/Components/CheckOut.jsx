import { useContext } from "react";
import { totalItem,totalPrice } from "../Store/CardReducer";
import { CartContext } from "../Store/ContextProvide";
import { useNavigate } from "react-router-dom";

const CheckOut=()=>{
    const {cart} = useContext(CartContext)
    const nav =useNavigate();
    const handleCheckoutform=()=>{
       nav('/Checkoutform');
    }
    return <>
     <div className="check_container">
        <div className="checkout">
            <h4>Order Summary</h4>
            <p>Sub total:</p>
            <p>Total Items : {totalItem(cart)}</p>
            <h5>Total Price : ${totalPrice(cart)}</h5>
            <button onClick={handleCheckoutform}>Check Out</button>
        </div>
     </div>
    
    </>
}

export default CheckOut;