import React from "react";
import Logo from "../images/logo1.svg";


const Footer = () => {
    return (<>
        <section className="footer">
            <div className="footer-logo">
                <img src={Logo} alt="logo"/>
            </div>
            <ul className="footer-menu">
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <ul className="footer-icon">
                <li><i className="fa-brands fa-square-facebook"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li><i className="fa-brands fa-pinterest"></i></li>
            </ul>
        </section>
    </>)
}

export default Footer;