import React from "react";
import Navbar from "../Navbar/Navbar";
import Info from "../Info/Info";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import './home.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <Info />
                <AboutUs />
                <Services />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Home;