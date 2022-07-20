import React from "react";
import "./card.scss";

function Card({ children, image, height, width }) {
    return (
        <div className="card-container" style={{ height, width }}>
            {image && (
                <div className="card-image">
                    <img src={image} alt="" srcSet="" />
                </div>
            )}
            <div className="card-body">{children}</div>
        </div>
    );
}

export default Card;
