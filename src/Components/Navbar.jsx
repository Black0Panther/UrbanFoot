import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../Store/ContextProvide";
const Navbar=()=>{
    
    const {cart} = useContext(CartContext);

  const [isOpen,setIsOpen]=useState(false);
const toogleMenu=()=>{
      setIsOpen(!isOpen);
}
  
    return <>
     <div className="Navbar">

    {/* <div className="logo"><img src="/images/brand_logo.png" alt="" /></div> */}
    <div className="logo"><p><strong>UrbanFoot</strong></p></div>

        <ul className={isOpen ? "options active" : "options"}>
           
            <Link to="/"><li className="active">Home</li></Link>
            {/* <li><Link to={'/cards'}>Location</Link></li> */}
            <li><Link to="/">About</Link></li>
            {/* <li ><Link to={'/'}>Support</Link></li> */}
        </ul>
      

   <div className="login2">

     {/* <a className="cart_link" href=""><BsCart4 />{cart.length}</a> */}
     {/* bootstrap button for cart below */}
   <Link to={"/cart"}>  <button type="button" class="btn btn-danger position-relative">
  <BsCart4 />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
  {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button></Link>
     <button className="login">Login</button>
    
    
    
     </div>
     </div>

    
    </>


}

export default Navbar;