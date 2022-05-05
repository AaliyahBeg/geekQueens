import React, {useState, useEffect} from "react";
import logo from "../assets/logo.png"
import Cards from "../components/Cards";

const HomePage = () => {
    return (
        <>
            <div className="">
                <div className="h-40 w-40 centered">
                    <img
                    src={logo}
                    alt="Logo"
                    className="h-full w-full "
                    />
                </div>
                <div className="">
                    <h1 className="text-center text-2xl text-white font-bold mt-5 comfortaa">WILD CANOPY</h1>
                    <h1 className="text-center text-lg text-white font-semibold mt-3">A helping hand...</h1>
                    <h1 className="text-center text-lg text-white font-semibold">...for the ailing paws</h1>
                </div>
                <div>
                    <Cards/>
                </div>
            </div>
            
            
        </>
    )
}

export default HomePage;