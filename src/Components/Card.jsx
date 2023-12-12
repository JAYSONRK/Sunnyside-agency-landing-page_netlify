import React from "react";
import Header from "./Header";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Footer from "./Footer";

const Card = () => {
    return (<>
        <main className="card container-fluid">
            <Header/>
            <Second/>
            <Third/>
            <Fourth/>
            <Fifth/>
            <Sixth/>
            <Footer/>
        </main>
    </>)
}

export default Card;