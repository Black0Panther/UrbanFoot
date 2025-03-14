import { useContext } from "react"
import { CartContext } from "../Store/ContextProvide"
import CheckOut from "../Components/CheckOut"


const CartProduct=({shoeData})=>{

const{cart,dispatch}=useContext(CartContext)
   
const Remove=(id)=>{
   dispatch(({type:"Remove" , id}))
}
   
   const Increase=(id)=>{
     const index= cart.findIndex(p=>p.id===id)
     if(cart[index].quantity<10){
        dispatch({type: "Increase", id})
     }
   }
   const Decrease=(id)=>{
    const index= cart.findIndex(p=>p.id===id)
    if(cart[index].quantity>1){
       dispatch({type: "Decrease", id})
    }
   }
   const updatedQuantity = cart.find(p => p.id === shoeData.id)?.quantity || 1;
    return <>
  
    <div className="cart_container">

      <div className="cartproduct">
      <div className="cart_container_left">
      <img src={shoeData.img} alt="" />
      </div>
      <div className="cart_container_right">
            <h4>{shoeData.name}</h4>
            <h4>Rs.{shoeData.price}</h4>
            <button onClick={()=>Remove(shoeData.id)}>Remove</button>
      </div>

     
      <div className="container_right_right">
      <button  onClick={()=>Decrease(shoeData.id)}>-</button>
                <button>{updatedQuantity}</button>
                <button onClick={()=>Increase(shoeData.id)}>+</button>
      </div>
      </div>
    </div>
    
    
   
    </>
}

export default CartProduct