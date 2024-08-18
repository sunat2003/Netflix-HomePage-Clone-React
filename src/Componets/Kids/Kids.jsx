
import "./Kids.css";
import kidsImage from "../../Image/kids.png";

export function Kids(){
    return(
        <>
        <hr />
        <section className="kids-section section-padding">
            <div className="kids-image-section">
                <img src={kidsImage} alt="uploring" />
            </div>
            <div className="kids-details-section">
                <h1>Create profiles for kids</h1>
                <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </section>
        </>
    )
}