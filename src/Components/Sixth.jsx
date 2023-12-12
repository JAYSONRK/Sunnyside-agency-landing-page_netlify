import React from "react";
import ImageAD from "../images/desktop/image-gallery-milkbottles.jpg";
import ImageAM from "../images/mobile/image-gallery-milkbottles.jpg";
import ImageBD from "../images/desktop/image-gallery-orange.jpg";
import ImageBM from "../images/mobile/image-gallery-orange.jpg";
import ImageCD from "../images/desktop/image-gallery-cone.jpg";
import ImageCM from "../images/mobile/image-gallery-cone.jpg";
import ImageDD from "../images/desktop/image-gallery-sugarcubes.jpg";
import ImageDM from "../images/desktop/image-gallery-sugarcubes.jpg";

const Sixth = () => {
    return (<>
        <section className="sixth row">
            <picture className="col-6  col-sm-6	col-md-4 col-lg-3 col-xl-3 col-xxl-3">
            <source media="(min-width:720px)" srcSet={ImageAD}/>
            <img src={ImageAM} alt="rep" style={{width:'auto'}}/>
            </picture>
            <picture className="col-6  col-sm-6	col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <source media="(min-width:720px)" srcSet={ImageBD}/>
            <img src={ImageBM} alt="rep" style={{width:'auto'}}/>
            </picture>
            <picture className="col-6  col-sm-6	col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <source media="(min-width:720px)" srcSet={ImageCD}/>
            <img src={ImageCM} alt="rep" style={{width:'auto'}}/>
            </picture>
            <picture className="col-6  col-sm-6	col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <source media="(min-width:720px)" srcSet={ImageDD}/>
            <img src={ImageDM} alt="rep" style={{width:'auto'}}/>
            </picture>
        </section>
    </>)
}

export default Sixth;