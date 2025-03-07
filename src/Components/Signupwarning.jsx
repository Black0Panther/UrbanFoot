import { Link, useNavigate } from "react-router-dom"

const Signupwarning=()=>{
  
  const navigate = useNavigate();
  const movetoSignup=()=>{
    navigate('/Signup')
  }
  const movetoSignin=()=>{
    navigate('/Signin')
  }
    return <>
     <div class="modal " id="signupModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Sign Up Now</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>To add the products into the cart please Sign up</p>
      </div>
      <div className="login_credential">
    Email:abc@gmail.com
    Password:123456
   </div>
      <div class="modal-footer">
        <button onClick={movetoSignup} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sign Up</button>
        {/* below used data-bs-dismiss="modal" which will close the modal after click signup so signup can work */}
       <button data-bs-dismiss="modal" onClick={movetoSignin} type="button" class="btn btn-primary">Sign in</button>
      </div>
    </div>
  </div>
</div>
    
    </>
}

export default Signupwarning