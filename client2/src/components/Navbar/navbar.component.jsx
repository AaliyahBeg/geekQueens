import React from "react";
import banner from "../../assets/Banner.jpg";

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
                
                <img
                src={banner}
                alt="Banner"
                className="w-full h-full"
                />
                
                <div className="w-full absolute top-0 left-0 bg-black opacity-80">
                    <h1 className="text-3xl text-white m-4">Hello World</h1>
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