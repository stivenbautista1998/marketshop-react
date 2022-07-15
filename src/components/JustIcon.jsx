import React from 'react';
import appIcon from "@icons/app-icon.png";

const iconSize = {
    "small": "41px",
    "normal": "55px"
}

const JustIcon = ({ size = null, responsiveSize = null }) => {
    { size !== null ? `` : "" }
    return (
        <img
            className={ responsiveSize !== null ? "logo-icon-small" : "" }
            style={ size !== null ? { height: iconSize[size] } : null } 
            src={appIcon} 
            alt="logo app" 
        />
    );
};

export { JustIcon };