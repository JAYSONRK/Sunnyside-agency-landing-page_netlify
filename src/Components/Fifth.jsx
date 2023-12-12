import React from "react";
import Emily from "../images/image-emily.jpg";
import Thomas from "../images/image-thomas.jpg";
import Jennie from "../images/image-jennie.jpg";

const Fifth = () => {
    return (<>
        <section className="fifth  row">
            <div className="client-testimonials  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12	col-xxl-12">
                <h3 className="heading">Client testimonials</h3>
                <div className="client">
                    <div className="clientA">
                        <picture>
                            <img src={Emily}  alt="A"/>
                        </picture>
                        <div className="testimony">
                            <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                        </div>
                        <div className="name">
                            <h3>Emily R.</h3>
                            <p>Marketing Director</p>
                        </div>
                    </div>
                    <div className="clientB">
                        <picture>
                            <img src={Thomas}  alt="A"/>
                        </picture>
                        <div className="testimony">
                            <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                        </div>
                        <div className="name">
                            <h3>Thomas S.</h3>
                            <p>Chief Operating Officer</p>
                        </div>
                    </div>
                        <div className="clientC">
                        <picture>
                            <img src={Jennie}  alt="A"/>
                        </picture>
                        <div className="testimony">
                            <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                        </div>
                        <div className="name">
                            <h3>Jennie F.</h3>
                            <p>Business Owner</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Fifth;