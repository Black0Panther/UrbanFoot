import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { app } from '../Firebase'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Signup=()=>{
    const navigate = useNavigate();
    const[Email,setEmail]=useState("");
    const[Pass,setPass]=useState("");
    const creatUser=()=>{
        createUserWithEmailAndPassword(
            auth,
           Email,
            Pass
        ).then((value)=>console.log("yesss"))
    }
    const [Regbtn,setRegbtn]=useState(false)
    const register=()=>{
        
         if(!Email.includes("@")|| Pass.length<6){
            alert("Enter valid email and password(should be greater than or equal to 6")
        }
        else if(Email.trim()!="" && Pass.trim()!=""){
            setRegbtn(!Regbtn);
            navigate('/')
         }
    }
    return <>
    <center>
    <div className="signup_container">
        <img src="/images/signup_img.png" alt="" />
        <div className="signup_container2">
        <h2>Register Now</h2>
        <form action="" className="signup_form">
            <div className="email">
            <label htmlFor="">Email:</label>
            <input type="email"onChange={(e)=>setEmail(e.target.value)} name="" id="" />
            </div>
            <div className="password">
            <label htmlFor="">Password:</label>
            <input type="password" onChange={(e)=>setPass(e.target.value)} />
           </div>
        </form>
        <button onClick={()=>{creatUser();register()}} style={{backgroundColor:Regbtn ? "green":"red"}}>Register</button>

</div>
    </div>
    </center>
    </>
}

export default Signup