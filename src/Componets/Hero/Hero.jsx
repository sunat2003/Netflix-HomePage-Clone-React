import { GetStarted } from "../GetStarted/GetStarted";
import { Navbar } from "../Navbar/Navbar";
import "./Hero.css";

export function Hero(){
    return(
        <section className="hero-section">
          <div className="hero-shade section-padding">
            <Navbar/>
            <div className="hero-details">
                <h1>Unlimited movies, TV shows and more</h1>
                <p className="hero-details-p">Watch anywhere. Cancel anytime.</p>
                <GetStarted/>
            </div>
          </div>
        </section>
    )
}