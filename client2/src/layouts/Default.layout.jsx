import React from "react";
import Footer from "../components/Footer/footer.component";
import Navbar from "../components/Navbar/navbar.component";
import HomePage from "../pages/Home.page";

const DefaultLayout = (props) => {
    return (
    <>
        <Navbar />
        <HomePage/>
        <Footer/>
    </>
    );
}

export default DefaultLayout;