

import "./Footer.css";
import { IoLanguage } from "react-icons/io5";

export function Footer() {
    return (
        <>
            <hr />
            <section className="footer-section section-padding">
                <p className="footer-para">Questions? Call 000-800-919-1694</p>
                <div className="footer-details">
                    <div className="footer-details-each">
                        <h5>FAQ</h5>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                        <div className="nav-language">
                            <IoLanguage />
                            <select className="nav-select footer-select">
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <h6>Netflix India</h6>
                    </div>
                    <div className="footer-details-each">
                        <h5>Help center</h5>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                    </div>
                    <div className="footer-details-each">
                        <h5>Accouts</h5>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                    </div>
                    <div className="footer-details-each">
                        <h5>Media Center</h5>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                    </div>
                </div>
            </section >
        </>
    )
}