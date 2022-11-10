import React from "react";
import './services-card.css';

const ServicesCard = ({props}) => {
    return (
        <div className={`services-card`}>
            <div className="services-card__text-container">
                <h2>{props.title}</h2>
                <p>{props.summary}</p>
            </div>
            <div className="services-card__img">
                <img src={props.img} />
            </div>
        </div>
    )
}

export default ServicesCard;