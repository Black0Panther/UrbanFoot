import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import CartSidebar from "./CartSidebar";
import 'bootstrap/dist/css/bootstrap.css';
import { CartContext } from "../Store/ContextProvide";
import CartProduct from "./CartProduct";
import CheckOut from "../Components/CheckOut";
import Addtocart from "../Components/Addtocart"
const Cart=()=>{
   const {cart}= useContext(CartContext)
   if(cart.length === 0 )
    return (
    
        <div className="Cardd">
              <center>
              <h2 style={{marginTop: "170px", fontWeight: "bolder", fontSize:"55px", marginBottom:"170px", color:"#3A4E48"}}>
                No items in the cart
              </h2>
              </center>
          </div>     
    );
      return (
        <div className="Cardd">
        <h3>Shopping Bag</h3>
        <Addtocart cart={cart}></Addtocart>
        </div>
      );
}

export default Cart;