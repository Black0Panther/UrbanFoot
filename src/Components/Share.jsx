import { SiTelegram } from "react-icons/si";
import { FiMessageCircle } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { CiInstagram } from "react-icons/ci";

const Share=()=>{
    const [isLiked,setisLiked]=useState(false);
    const toggleLike=()=>{
        setisLiked(!isLiked);
    }
    return <>
       <div className="share_col">
        <ul className="Share_icons"> 
            <li><SiTelegram /></li>
            <li><FiMessageCircle /> </li>
            <li><FaFacebook /></li>
           <li> <CiInstagram /></li>
        </ul>
       </div>
    
    </>
}

export default Share;