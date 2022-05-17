import React from "react";
// import banner from "../../assets/Banner2.jpg";
// import logo from "../../assets/logo.png";
// import Menu from "./Menu"
import {BsInstagram, BsTwitter, BsLinkedin, BsFillTelephoneFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {GiPeaceDove,GiKoala,GiTreeBranch} from "react-icons/gi"
 
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
                <div className="flex justify-evenly gap-10">

                    <div>
                        <h1 className="font-semibold text-lg text-white">
                            Social Media Links
                        </h1>
                        <a href="https://www.instagram.com/wildcanopy/" className="flex items-center my-2 gap-3">
                            <BsInstagram className="text-xl text-insta"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a>
                        {/* <a href="\#" className="flex items-center my-2 gap-3">
                            <BsTwitter className="text-xl text-twitter"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a> */}
                        <div>
                            <a href="https://www.linkedin.com/in/aaliyah-beg-6a4738204?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bzuv9nuhmTYiKFHgh5ySsTg%3D%3D" className="flex items-center my-2 gap-3">
                                <BsLinkedin className="text-xl text-linkedin"/>
                                <h1 className="text-md text-white">Aaliyah Beg</h1>
                            </a>
                            <a href="https://www.linkedin.com/in/chayanika-basak-183394239?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgqFooo%2BBSlCACvfUMho4XQ%3D%3D" className="flex items-center my-2 gap-3">
                                <BsLinkedin className="text-xl text-linkedin"/>
                                <h1 className="text-md text-white">Chayanika Basak</h1>
                            </a>
                        </div>
                        
                    </div>

                    <div>
                        <h1 className="font-semibold text-lg text-white">
                            More Resources
                        </h1>
                        <a href="https://sdgs.un.org/goals" className="flex items-center my-2 gap-3">
                            <GiPeaceDove className="text-xl text-twitter"/>
                            <h1 className="text-md text-white">UN - 17 SDGs</h1>
                        </a>
                        <a href="https://sdgs.un.org/goals/goal15" className="flex items-center my-2 gap-3">
                            <GiKoala className="text-xl text-white bg-black"/>
                            <h1 className="text-md text-white">SDG - 15</h1>
                        </a>
                        <a href="https://fsi.nic.in/" className="flex items-center my-2 gap-3">
                            <GiTreeBranch className="text-xl text-[#247730]"/>
                            <h1 className="text-md text-white">Forest Survey of India</h1>
                        </a>
                    </div>

                    <div>
                        <h1 className="font-semibold text-lg text-white">
                            Contact Us
                        </h1>
                        <a href="mailto:aaliyahbeg123@gmail.com" className="flex items-center my-2 gap-3">
                            <HiOutlineMail className="text-xl text-red-500"/>
                            <h1 className="text-md text-white">aaliyahbeg123@gmail.com</h1>
                        </a>
                        <a href="mailto:cb250802@gmail.com" className="flex items-center my-2 gap-3">
                            <HiOutlineMail className="text-xl text-red-500"/>
                            <h1 className="text-md text-white">cb250802@gmail.com</h1>
                        </a>
                        {/* <a href="\#" className="flex items-center my-2 gap-3">
                            <BsFillTelephoneFill className="text-xl text-amber-300"/>
                            <h1 className="text-md text-white">@wildcanopy</h1>
                        </a> */}
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
            <nav className="bg-black shadow-xl p-6">
                <div className="md:hidden">
                    {/*Mobile Screen*/}
                    <FooterSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/*Tablet Screen*/}
                    <FooterMd />
                </div>
                <div className="hidden lg:block">
                    {/*Laptop/TV Screen*/}
                    <FooterLg />
                </div>
            </nav>
            
        </>
    );
}

export default Footer;