import { useState } from "react";

const Prac=(shoeData)=>{
     const[isincart,setisincart] = useState(false);
     const toogle=()=>{
        setisincart(!isincart);
     }
    return<>
    <div className="kl">
        <h2>HEy</h2>
        <h4>7th className</h4>
        <h4>Roll no 21</h4>
        <h4>pass</h4>
        <button style={{backgroundColor:isincart ? "green" : "red"}} onClick={()=>{toogle()}}>{isincart?"Added" : "Add to cart"}</button>
    </div>
    </>
}

export default Prac;