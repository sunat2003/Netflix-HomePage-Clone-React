import { useState } from "react";
import "./AsQ.css";
import { AiOutlinePlus } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";
import React from "react";
import { GetStarted } from "../GetStarted/GetStarted";

const Ques = [
    {
        id: 1,
        containt: "What is Netflix?",
        description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        id: 2,
        containt: "How much does Netflix cost?",
        description:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        id: 3,
        containt: "Where can I watch?",
        description:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        id: 4,
        containt: "How do I cancel?",
        description:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        id: 5,
        containt: "What can I watch on Netflix?",
        description:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        id: 6,
        containt: "Is Netflix good for kids?",
        description:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]

export function AskQ() {
    const [styleDiv, setstyleDiv] = useState({display:"none"});
    const [flag, setFlag] = useState(false);
    const [ide,setIde]=useState(0);
    function handleClick(id) {
        if(flag===false){
        setstyleDiv(
            {display:"block"}
        )
        setFlag(true);
        setIde(id);
    } 
    else{
        setstyleDiv(
            {display:"none"}
        )
        setFlag(false);
    }
    }
    return (
        <>
            <hr />
            <section className="askQ-section section-padding">
                <h1>Frequently Asked Questions</h1>
                <div className="Ask-Qs">
                    {
                        Ques.map(data =>
                            <React.Fragment key={data.id}>
                                <div onClick={()=>{handleClick(data.id)}} className="Ask-Qs-data">{data.containt} {(flag === false) ? <AiOutlinePlus /> : <RiCloseLargeFill />}</div>
                                {(data.id===ide)?<div className="Ask-Qs-data" style={styleDiv} >{data.description}</div>:<div></div>}
                            </React.Fragment>
                        )
                    }
                </div>
                <GetStarted />
            </section>
        </>
    )
}