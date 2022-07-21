import React from "react";
import "./crossButton.scss";

function CrossButton({ fontSize, color, size, handleCrossButtonClick }) {
    return (
        <button
            className="cross-btn"
            onClick={() => handleCrossButtonClick()}
            style={{
                background: color ? color : "#666",
                width: size ? size : "20px",
                height: size ? size : "20px",
                border: color ? color : "black",
                color: "#fff",
                fontSize: fontSize ? fontSize : "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div class="cross">X</div>
        </button>
    );
}

export default CrossButton;
