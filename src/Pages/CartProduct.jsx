import { useContext } from "react"
import { CartContext } from "../Store/ContextProvide"

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

    return <>
     <div className="cart_container">
        <div className="img">
        <img src={shoeData.img} alt="" height={'80px'} width={'80px'}/>
        </div>
        <div className="content">
            <h2>{shoeData.name}</h2>
            <h3>{shoeData.price}</h3>
            <p>{shoeData.content}</p>
            <div className="cart_quantity_buttons">
                <button  onClick={()=>Decrease(shoeData.id)}>-</button>
                <button>{shoeData.quantity}</button>
                <button onClick={()=>Increase(shoeData.id)}>+</button>
                <button onClick={()=>Remove(shoeData.id)}>Remove</button>
            </div>
        </div>
     </div>
   
    </>
}

export default CartProduct