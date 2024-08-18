import "./Navbar.css";
import logo from "../../Image/logo.png";
import { IoLanguage } from "react-icons/io5";
import { Link } from "react-router-dom";
export function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="uploarding" />
                </div>
                <div className="nav-details">
                    <div className="nav-language">
                        <IoLanguage />
                        <select className="nav-select">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                        <select className="nav-select nav-media-select">
                            <option></option>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                    <button className="nav-button"><Link to="/signIn" className="link">Sign in</Link></button>
                </div>
            </nav>
        </div>
    )
}