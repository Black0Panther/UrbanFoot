import CartProduct from "../Pages/CartProduct"
import CheckOut from "./CheckOut"

const Addtocart=({cart})=>{
    return <>
    <div className="addtocart">
    <div className="addtocart_left">
         {cart.map((p) => <CartProduct key={p.id} shoeData={p} cart={cart} />)}
         </div>
         <div className="addtocart_right">
         {cart.length > 0 && (
                 <div className="check">
                   <CheckOut />
                 </div>
               )}
         </div>
         </div>
    </>
}

export default Addtocart