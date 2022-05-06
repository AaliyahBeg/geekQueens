import React from "react";
import logo from "../assets/logo.png"
import Cards from "../components/Cards";

const HomePage = () => {
    return (
        <>
            <div className="">
                <div className="w-40 centered mt-12">
                    <img
                    src={logo}
                    alt="Logo"
                    className="h-full w-full "
                    />
                </div>
                <div className="">
                    <h1 className="text-center text-5xl text-white font-bold mt-5">Wild Canopy</h1>
                    <h1 className="text-center text-2xl text-white font-semibold mt-3">A helping hand, for the ailing paws</h1>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-center text-white mt-40">What are we doing</h1>
                    <Cards/>
                </div>
            </div>
            
            
        </>
    )
}

export default HomePage;