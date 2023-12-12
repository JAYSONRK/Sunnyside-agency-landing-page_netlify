import React from "react";
import Logo from "../images/logo.svg";
import MenuIcon from "../images/icon-hamburger.svg";
import Arrow from "../images/icon-arrow-down.svg";

const Header = () => {
    return (<>
        <section className="header row">
            <div className="header-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="menu-section">
                    <picture className="logo">
                        <img src={Logo} alt="logo"/>
                    </picture>
                    <div  className="mob menu-icon dropdown">
                        <picture className="toggled" data-bs-toggle="dropdown">
                            <img src={MenuIcon} alt="menuicon"/>
                        </picture>
                        <ul className="option dropdown-menu">
                            <div className="triangle-up"></div>
                            <li><a className="dropdown-item" href="#ab">About</a></li>
                            <li><a className="dropdown-item" href="#bc">Services</a></li>
                            <li><a className="dropdown-item" href="#cd">Projects</a></li>
                            <li><button className="dropdown-item">Contact</button></li>
                        </ul>  
                    </div>
                    <div className="desk">
                        <ul className="menu">
                            <li>About</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li><button>Contact</button></li>
                        </ul>
                    </div>
                </div>
                <h1>We are creatives</h1>
                </div>
                <img className="arrow" src={Arrow} alt="arrow"/>
        </section>
    </>)
}

export default Header;

