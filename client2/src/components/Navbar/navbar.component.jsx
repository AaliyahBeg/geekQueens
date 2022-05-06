import React from "react";
import banner from "../../assets/Banner2.jpg";
import logo from "../../assets/logo.png";
import Menu from "./Menu"
const NavSm = () => {
    return (
        <>
            
        </>
    )
}

const NavMd = () => {
    return(
        <>
        </>
    );
}

const NavLg = () => {
    return(
        <>
            <div className="relative z-10 w-full">
                
                <div>
                    <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-3/4 shadow-lg shadow-[#2a2f1b]"
                    />
                </div>
                <div className="flex items-center w-full absolute top-0 left-0 bg-black opacity-80 shadow-lg shadow-[#2a2f1b]">
                    
                    <div className="w-5/6 flex items-center gap-5">
                        <div className="w-10 h-10 ml-3 my-3">
                            <img
                            src={logo}
                            alt="Logo"
                            className="w-full h-full"
                            />
                        </div>
                        
                        <h1 className="text-3xl text-white m-4">Wild Canopy</h1>
                        <a href="\#" className="text-md text-white">Home</a>
                        <a href="\#" className="text-md text-white">Track Flora</a>
                        <a href="\#" className="text-md text-white">Track Fauna</a>
                        <a href="\#" className="text-md text-white">Petitions</a>
                        <a href="\#" className="text-md text-white">Help</a>
                        <a href="\#" className="text-md text-white">About Us</a>
                    </div>

                    <div className="flex items-center justify-end mx-10 w-1/6 gap-5">
                        <a href="\#" className="text-md text-white">Sign In</a>
                        <a href="\#" className="text-md text-white">Sign Up</a>
                        {/* <Menu/> */}
                    </div>
                    

                </div>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <>
            <nav>
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

export default Navbar;