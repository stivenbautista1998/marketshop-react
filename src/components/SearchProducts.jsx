import React, { useState, useEffect, useRef } from 'react';

import searchSvg from "@icons/search-icon.svg";
import xIconSvg from "@icons/x-icon.svg";

const SearchProducts = ({ leftPosition = null, searchValue, setSearchValue, filterBySearch }) => {
    const [ showSearch, setShowSearch ] = useState(true);
    const [ showCloseBtn, setShowCloseBtn ] = useState(false);
    const styleElement = (leftPosition !== null ? { left: leftPosition } : null);

    const inputRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const scrollHandler = () => {
            if(lastScrollY < window.scrollY) {
                setShowSearch(false);
            } else {
                setShowSearch(true);
            }
            lastScrollY = window.scrollY;
        }

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    },[]);

    function cleanSearchInput() {
        if(searchValue.length > 0) setSearchValue('');
        setShowCloseBtn(false);
        inputRef.current.focus();
    }

    function searchHandler(event) {
        const { value } = event.target;
        if(event.type === "change") {
            setSearchValue(value);
            ((value.length > 0) ? setShowCloseBtn(true) : setShowCloseBtn(false));
        }

        if(event.type === "keyup") {
            if(value.length > 3) {
                if(event.keyCode === 13) { // enter key code
                    filterBySearch(value);
                    console.log(value);
                }
            }
        }
    }

    return (
        <div className="search-wrapper">
            <div className={`general-input center-search search-home-section ${showSearch ? '' : 'search--hidden'}`} 
                style={styleElement}>
                <img 
                    className="search-home-icon search-icon" 
                    src={searchSvg} 
                    alt="search icon" 
                />
                <input 
                    ref={inputRef}
                    onKeyUp={searchHandler} 
                    onChange={searchHandler}
                    value={searchValue}
                    className="header-home-section__search" 
                    type="text" 
                    placeholder="Search product" 
                />
                <img 
                    onClick={cleanSearchInput} 
                    className={`search-home-icon clean-search ${ showCloseBtn ? 'close-visible' : '' }`}
                    src={xIconSvg} 
                    alt="close icon" 
                />
            </div>
        </div>
    );
}

export { SearchProducts };