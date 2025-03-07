import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from '../Firebase'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const auth = getAuth(app)


const Signin=()=>{
    const [Email,setEmail]=useState("");
    const [Pass,setPass]=useState("");
    const userSign=()=>{
  
    signInWithEmailAndPassword(
        auth,
        Email,
        Pass
    ).then((value)=>console.log("success")).catch((err)=>console.log("wrong"))
}
const nav = useNavigate();
const [singIn,setsignIn]=useState(false)
const handleSignin=()=>{
     setsignIn(!singIn);
     nav('/Mainproducts');
}
    return <>
    <center>
    <div className="signup_container">
        <img src="/images/signup_img.png" alt="" />
        <div className="signup_container2">
        <h2>Sign In Now</h2>
        <div className="login_credential">
    Email:abc@gmail.com
    Password:123456
   </div>
        <form action="" className="signup_form">
            <div className="email">
            <label htmlFor="">Email:</label>
            <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} name="" id="" />
            </div>
            <div className="password">
            <label htmlFor="">Password:</label>
            <input type="password" value={Pass} onChange={(e)=>setPass(e.target.value)} />
           </div>
        </form>
        <button onClick={()=>{userSign();handleSignin()}} style={{backgroundColor:singIn ? "green":"red"}}>Sign In</button>
     

</div>
    </div>
    </center>
    </>
}

export default Signin