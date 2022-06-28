import React from 'react';

import searchSvg from "@icons/search-icon.svg";
import xIconSvg from "@icons/x-icon.svg";

const SearchProducts = ({ leftPosition = null, searchHandler, cleanSearchInput }) => {
    const styleElement = leftPosition !== null ? { left: leftPosition } : null;

    return (
        <div className="search-wrapper">
            <div className="general-input center-search search-home-section" style={styleElement}>
                <img className="search-home-icon search-icon" src={searchSvg} alt="search icon" />
                <input id="search-input" onKeyUp={searchHandler} className="header-home-section__search" type="text" placeholder="Search product" />
                <img id="js-clean-search" onClick={cleanSearchInput} className="search-home-icon clean-search" src={xIconSvg} alt="close icon" />
            </div>
        </div>
    );
}

export { SearchProducts };