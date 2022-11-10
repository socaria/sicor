import React from "react";
import './services.css';
import services from '../../utils/services';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    return (
        <div className="services">
            <h2>Services</h2>
            {services?.map((s, index) => {
                return (
                    <ServicesCard key={index} props={s} index={index} />
                )
            })}
        </div>
    )
}

export default Services;