import React from "react";
import "./card.scss";

function Card({ children, image, height, width }) {
    return (
        <div className="card-container" style={{ height, width }}>
            {image && (
                <div class="card-image">
                    <img src={image} alt="" srcset="" />
                </div>
            )}
            <div class="card-body">{children}</div>
        </div>
    );
}

export default Card;
