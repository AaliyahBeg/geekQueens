import React from "react";
import banner from "../../assets/Banner.jpg";
import logo from "../../assets/logo.jpeg";

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
            <div className="relative z-10 w-screen">
                
                <div className="h-screen">
                    <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-full"
                    />
                </div>
                <div className="w-full absolute top-0 left-0 bg-black opacity-80">
                    <div className="flex items-center">
                        <div className="w-10 h-10 m-3">
                            <img
                            src={logo}
                            alt="Logo"
                            className="w-full h-full"
                            />
                        </div>
                        
                        <h1 className="text-3xl text-white m-4">Wild Canopy</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {
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

export default Navbar;