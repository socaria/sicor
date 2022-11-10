import React from "react";
import './about-us.css';
import img from '../../images/servicio.PNG';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us__sections">
                <h2 >
                    NOSOTROS
                </h2>
                <p>texto descriptivo</p>
            </div>
            <img src={img} alt='Img'/>
        </div>

    )
}

export default AboutUs;