import { useContext } from "react";
import { totalItem,totalPrice } from "../Store/CardReducer";
import { CartContext } from "../Store/ContextProvide";

const CheckOut=()=>{
    const {cart} = useContext(CartContext)
    return <>
     <div className="check_container">
        <div className="checkout">
            <h5>Total Items : {totalItem(cart)}</h5>
            <h5>Total Price : ${totalPrice(cart)}</h5>
            <button>Check Out</button>
        </div>
     </div>
    
    </>
}

export default CheckOut;