import React from "react";
import Navbar from "../Navbar/Navbar";
import Inicio from "../Inicio/Inicio";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import './home.css';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <Inicio />
                <AboutUs />
                <Services />
                <Contact />
            </div>
        </>
    )
}

export default Home;