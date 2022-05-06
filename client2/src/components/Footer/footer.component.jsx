import React from "react";
import banner from "../../assets/Banner2.jpg";
import logo from "../../assets/logo.png";
import Menu from "./Menu"
const FooterSm = () => {
    return (
        <>
            
        </>
    )
}

const FooterMd = () => {
    return(
        <>
        </>
    );
}

const FooterLg = () => {
    return(
        <>
            
        </>
    )
}

const Footer = () => {
    return (
        <>
            <nav className="bg-coolGrey-700">
                <div className="md:hidden">
                    {/*Mobile Screen*/}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/*Tablet Screen*/}
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    {/*Laptop/TV Screen*/}
                    <NavLg />
                </div>
            </nav>
            
        </>
    );
}

export default Footer;