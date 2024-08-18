import "./Downlord.css";
import mobileImage from "../../Image/mobile-0819.jpg";
import box from "../../Image/boxshot.png";
import { CiSaveDown2 } from "react-icons/ci";

export function Downlord() {
    return (
        <>
            <hr />
            <section className="downlord-section section-padding">
                <div className="downlord-image">
                    <div className="downlord-image-photo">
                        <img src={mobileImage} alt="uploading" />
                        <div className="image-card">
                             <div className="image-card-left">
                                 <img src={box} alt="uplording" />
                             </div>
                             <div className="image-card-right">
                                <p className="cart-details">Stranger Things</p>
                                <p className="image-card-downlord">Downlording...</p>
                             </div>
                             <CiSaveDown2 className="downlord-icons" />
                        </div>
                    </div>
                </div>
                <div className="downlord-details">
                    <h1>Download your shows to watch offline</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </section>
        </>
    )
}