import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../Store/ContextProvide";
import {getAuth , onAuthStateChanged,signOut} from "firebase/auth"
import { app } from "../Firebase";

const Navbar=()=>{
  const navigate = useNavigate();
    const auth = getAuth(app)
    const [User,setUser]=useState("");
    const {cart} = useContext(CartContext);

  const [isOpen,setIsOpen]=useState(false);
const toogleMenu=()=>{
      setIsOpen(!isOpen);
}
  //for signout 
  const handlesignout=()=>{
       signOut(auth);
       setUser(null)
       navigate('/')
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
   <Link to={"/cart"}>  <button type="button" className="btn btn-danger position-relative">
  <BsCart4 />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
  {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
        <Link to={'/Signin'}> <button className="login">Login</button></Link>
 
 
    <button onClick={handlesignout}>Log Out</button>
    
    
     </div>
     </div>

    
    </>


}

export default Navbar;