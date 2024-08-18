
import './SineIn.css';
import imgLogo from "../../Image/logo.png";
import { Link } from 'react-router-dom';
export function NetflixRegistation() {

    return (
       <div className="sign-In-section">
           <div className="sineIn-shade section-padding">
               <form className="netflix-signin-form">
                  <h1>Sign In</h1>
                  <input type="text" placeholder="Email or mobile" className="netflix-form-input"/>
                  <input type="password" placeholder="Password" className="netflix-form-input"/>
                  <button className="form-btn">Sine In</button>
                  <p className="form-or">OR</p>
                  <button className="form-btn btn-gray">Use a sine-in code</button>
                  <p className="form-forget">Forgot password</p>
                  <div className="check-div">
                    <input type="checkbox"/>
                    <p>Remember me</p>
                  </div>
                  <p className="sine-up-form">New to Netflix?<span> <Link to="/">Sign up now.</Link></span></p>
                  <p className="form-footer-para">This page is protected by Google reCAPTCHA to ensure you're not a bot. <span> Learn more.</span></p>
               </form>
               <img src={imgLogo } alt="uploarding" />
           </div>
       </div>
    )
}
