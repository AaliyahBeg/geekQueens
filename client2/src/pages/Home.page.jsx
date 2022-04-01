import React, {useState, useEffect} from "react";
import logo from "../assets/logo.jpeg"

const HomePage = () => {
    return (
        <>
            <div className="h-40 w-40 m-16 centered">
                <img
                src={logo}
                alt="Logo"
                className="h-full w-full "
                />
            </div>
            
        </>
    )
}

export default HomePage;