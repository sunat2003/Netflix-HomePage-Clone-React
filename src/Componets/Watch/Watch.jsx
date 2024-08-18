import "./Watch.css";
import watchImage from "../../Image/device-pile-in.png"; 


export function Watch(){
    return(
       <>
       <hr />
        <section className="watch-section section-padding">
          <div className="watch-section-details">
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="watch-section-image">
              <img src={watchImage} alt="uplording" />
          </div>
        </section>
       </>
    )
}