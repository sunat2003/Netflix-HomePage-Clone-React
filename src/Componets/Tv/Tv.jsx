import "./Tv.css";
import tv from "../../Image/tv.png";

export function Tv(){
    return(
       <>
       <hr/>
        <section className="tv-section section-padding">
            <div className="tv-details">
                <h1>Enjoy on your TV</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="tv-image">
               <div className="tv-image">
                  <img src={tv} alt="" />
               </div>
            </div>
        </section>
       </>
    )
}