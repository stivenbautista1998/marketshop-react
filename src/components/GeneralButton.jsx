import React from 'react';

const GeneralButton = ({ buttonText, color, clickHandler }) => {
    return (
        <button
            onClick={clickHandler} 
            className={`general-button ${color === "white" ? "white--btn" : "green--btn"}`}>
            {buttonText}
        </button>
    );
}

export { GeneralButton };