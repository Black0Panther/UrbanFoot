export const totalItem=(cart)=>{
      return cart.reduce((sum,shoeData)=> sum+shoeData.quantity,0)
}

export const totalPrice=(cart)=>{
      return cart.reduce((total,shoeData)=> total + shoeData.quantity * shoeData.price,0)
}

const CardReducer = (state,action)=>{
switch(action.type){

 case "Add":
       return [...state,action.shoeData]
 case "Remove":
     return state.filter(p=>p.id!== action.id)

 case "Increase":
      const indexI= state.findIndex(p=>p.id===action.id)
      state[indexI].quantity+= 1;
      return[...state]
 
 case "Decrease":
      const indexD= state.findIndex(p=>p.id===action.id)
      state[indexD].quantity-= 1;
      return[...state]


default:
       state;
}

}

export default CardReducer