import React from "react";
// import banner from "../../assets/Banner2.jpg";
// import logo from "../../assets/logo.png";
// import Menu from "./Menu"
import {BsInstagram, BsTwitter, BsLinkedin, BsFillTelephoneFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
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
            <div>
                <div className="flex items-center content-evenly gap-10">

                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg text-white">
                            Social Media Links
                        </h1>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <BsInstagram className="text-xl text-insta"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <BsTwitter className="text-xl text-twitter"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <BsLinkedin className="text-xl text-linkedin"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg text-white">
                            More Resources
                        </h1>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <BsInstagram className="text-xl text-insta"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <BsTwitter className="text-xl text-twitter"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <BsLinkedin className="text-xl text-linkedin"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="font-semibold text-lg text-white">
                            Contact
                        </h1>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <HiOutlineMail className="text-xl text-red-500"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                        <a href="\#" className="flex items-center my-2 gap-3">
                            <BsFillTelephoneFill className="text-xl text-amber-300"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                        {/* <a href="\#" className="flex items-center my-2 gap-3">
                            <BsLinkedin className="text-xl text-linkedin"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a> */}
                    </div>

                </div>
            </div>
            
        </>
    )
}

const Footer = () => {
    return (
        <>
            <nav className="bg-black shadow-md p-6">
                <div className="md:hidden">
                    {/*Mobile Screen*/}
                    <FooterSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/*Tablet Screen*/}
                    <FooterMd />
                </div>
                <div className="hidden lg:flex">
                    {/*Laptop/TV Screen*/}
                    <FooterLg />
                </div>
            </nav>
            
        </>
    );
}

export default Footer;