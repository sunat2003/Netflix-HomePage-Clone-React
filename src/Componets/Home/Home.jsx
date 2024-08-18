import React from "react";
import { Hero } from "../Hero/Hero";
import { Tv } from "../Tv/Tv";
import { Downlord } from "../Downlord/Downlord";
import { Watch } from "../Watch/Watch";
import { Kids } from "../Kids/Kids";
import { AskQ } from "../AskQ/AskQ";
import { Footer } from "../Footer/Footer";


function Home() {
    return (
        <div>
            <Hero />
            <Tv/>
            <Downlord/>
            <Watch/>
            <Kids />
            <AskQ/>
            <Footer/>
        </div>
    )
}


export default Home;