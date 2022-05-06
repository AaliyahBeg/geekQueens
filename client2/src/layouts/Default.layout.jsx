import React from "react";
import Footer from "../components/Footer/footer.component";
// import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import Navbar from "../components/Navbar/navbar.component";
import HomePage from "../pages/Home.page";

const DefaultLayout = (props) => {
    return (
    <>
        <Navbar />
        {/* <HeroCarousel /> */}
        <HomePage/>
        <Footer/>
    </>
    );
}

export default DefaultLayout;