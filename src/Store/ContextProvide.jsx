import { createContext, useReducer } from "react";
import CardReducer from "./CardReducer";

export const CartContext=createContext();

const ContextProvider=({children})=>{
        const[cart,dispatch]=useReducer(CardReducer,[]);
        return(
           <CartContext.Provider value={{cart,dispatch}}>
       {/* this will provide the cart and dispactch(funtions of dispatch to all companant in this provider) */}
           {children}
           </CartContext.Provider>

        )
}

export default ContextProvider