import "./GetStarted.css";
import { FaChevronRight } from "react-icons/fa";

export function GetStarted(){
    return(
        <div className="getstarted-part">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="getstarted-input">
                <input type="text" placeholder="Email Address" />
                <button className="getstarted-btn">Get Started <FaChevronRight className="get-icons" /></button>
            </div>
        </div>
    )
} 