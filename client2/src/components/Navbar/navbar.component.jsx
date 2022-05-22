import React,{useState} from "react";
import banner from "../../assets/Banner.png";
import logo from "../../assets/logo.png";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavSmMd = () => {

    const [icon,setIcon]=useState(true);
    const iconChange=icon?<div className="p-4 flex items-center w-screen bg-black shadow-lg shadow-[#2a2f1b]">
                    
                        <div className="flex items-center w-5/6">
                            <div className="w-20 h-20 ml-3 my-3">
                                <img
                                src={logo}
                                alt="Logo"
                                className="w-full h-full"
                                />
                            </div>
                            
                            <h1 className="text-5xl text-white mx-6">Wild Canopy</h1>
                            
                        </div>

                        <button onClick={()=>{setIcon(!icon)}} className="flex items-center justify-end mx-10 w-1/6 gap-5">
                            <AiOutlineMenu className="text-sandy text-5xl"/>
                        </button>
    

                    </div> 
                    :
                    <div className="py-4 flex flex-col">
                        <div className="flex items-center w-screen bg-black opacity-80 shadow-lg shadow-[#2a2f1b]">
                        
                            <div className="flex items-center w-5/6">
                                <div className="w-20 h-20 ml-3 my-3">
                                    <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-full h-full"
                                    />
                                </div>
                                
                                <h1 className="text-5xl text-white m-4">Wild Canopy</h1>
                                
                            </div>

                            <button onClick={()=>{setIcon(!icon)}} className="flex items-center justify-end mx-10 w-1/6 gap-5">
                                <AiOutlineClose className="text-sandy text-5xl"/>
                            </button>
        

                        </div>
                        <div className="flex flex-col bg-black py-4">
                            <a href="\#" className="block text-3xl text-white centered pt-4">Home</a>
                            <a href="\#" className="block text-3xl text-white centered pt-4">Track Flora</a>
                            <a href="\#" className="block text-3xl text-white centered pt-4">Track Fauna</a>
                            <a href="\#" className="block text-3xl text-white centered pt-4">Petitions</a>
                            <a href="\#" className="block text-3xl text-white centered pt-4">Help</a>
                            <a href="\#" className="block text-3xl text-white centered pt-4">About Us</a>
                            <a href="\#" className="block text-3xl text-white centered pt-4">Sign In</a>
                            <a href="\#" className="block text-3xl text-white centered pt-4">Sign Up</a>
                        </div>
                        
                    </div> 
    return(
        <>
                
                {iconChange}
            
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
                <div className="flex lg:hidden">
                    {/*Mobile and Tablet Screen*/}
                    <NavSmMd />
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