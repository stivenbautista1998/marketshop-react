import React from 'react';
import appIcon from "@icons/app-icon.png"

const IconApp = ({ bigSize = false }) => {
    return (
        <div className={ bigSize ? "logo-icon" : "logo-icon-small" }>
            <img className={ bigSize ? "logo-icon" : "logo-icon-small" } src={appIcon} alt="logo of the webpage" />
            <span className={ bigSize ? "text-logo main-blue big-logo-text" : "text-logo main-blue normal-logo-text"}>
                <span className="green__message">Market </span>
                Shop
            </span>
        </div>
    );
};

export { IconApp };