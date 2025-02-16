import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import CartSidebar from "./CartSidebar";
import 'bootstrap/dist/css/bootstrap.css';
import { CartContext } from "../Store/ContextProvide";
import CartProduct from "./CartProduct";
import CheckOut from "../Components/CheckOut";

const Cart=()=>{
   const {cart}= useContext(CartContext)
    return (
      <>
        <div className="Cardd">
          <div className="cartpage">
            {cart.length === 0 ? (
              <center>
              <h2 style={{marginTop: "170px", fontWeight: "bolder", fontSize:"55px", marginBottom:"170px", color:"#3A4E48"}}>
                No items in the cart
              </h2>
              </center>
            ) : (
              cart.map((p) => <CartProduct key={p.id} shoeData={p} />)
            )}
          </div>
  
          {/* Show Checkout only if cart has items */}
          {cart.length > 0 && (
            <div className="check">
              <CheckOut />
            </div>
          )}
        </div>
      </>
    );
}

export default Cart;