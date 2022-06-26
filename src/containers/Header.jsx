import React from 'react';

function searchHandler(event) {
    console.log(event);
}

function handleHomeList(event) {
    console.log(event);
}

function cleanSearchInput() {
    console.log("something clicked!");
}

const Header =  ({ setShowMenuTab, setCanScrollHome, showShoppingCardTab, setShowShoppingCardTab, searchLeftPosition }) => {
    const [ showNav, setShowNav ] = React.useState(false);
    // const [ showLogo, setShowLogo ] = React.useState(false);
    const [ showLogoApp, setShowLogoApp ] = React.useState(true);

    function showMenu() {
        setShowMenuTab(true);
        setCanScrollHome(false);
    }

    function handleMenuNav() {
        setShowNav((prevState) => !prevState);
    }

    function removeShoppingTabStyle() {
        setShowShoppingCardTab(false);
        setCanScrollHome(true);
        setShowLogoApp(true);
    }

    function showProductsSelected() {
        console.log("showProductsSelected message");
    }

    function showShoppingCard() {
        if(window.innerWidth < 500) { // if the screen size is more less than 500px then work with the mobile class for menu.  
            if(showShoppingCardTab === true) {
                removeShoppingTabStyle();
            } else {
                setShowShoppingCardTab(true);
                setCanScrollHome(false);
                setShowLogoApp(false);
                showProductsSelected();
            }
        } else { // if screen size >= 500px then work with the menu class for larger devices.
            if(showShoppingCardTab === true) {
                removeShoppingTabStyle();
                /* calcShoppingTabRightMargin(); */
            } else {
                setShowShoppingCardTab(true);
                /* calcShoppingTabRightMargin(); */
                showProductsSelected();
            }
        }
    }
    
    return (
        <header className="header-home-section">
            <nav className="nav-section">
                <div className="header-home-nav">
                    <img className="menu-icon" onClick={showMenu} src="../assets/icons/menu-icon.svg" alt="menu icon" />
                    <div id="js-left-nav" className={`left-nav ${showLogoApp ? "" : "hide-logo"}`}>
                        <img id="js-link-logo" className="logo-icon-small" src="../assets/icons/logo.svg" alt="logo of the webpage" />
                        <ul id="home-nav-desk" className="header-home-section__list hide-section">
                            <li id="js-all-desk" onClick={handleHomeList} className="header-home-section__list-option selected-item-desk">All</li>
                            <li id="js-clothes-desk" onClick={handleHomeList} className="header-home-section__list-option">Clothes</li>
                            <li id="js-electronics-desk" onClick={handleHomeList} className="header-home-section__list-option">Electronics</li>
                            <li id="js-furnitures-desk" onClick={handleHomeList} className="header-home-section__list-option">Furnitures</li>
                            <li id="js-toys-desk" onClick={handleHomeList} className="header-home-section__list-option">Toys</li>
                            <li id="js-others-desk" onClick={handleHomeList} className="header-home-section__list-option">Others</li>
                        </ul>
                    </div>
                    <h2 id="js-tittle-logo" className={/* showLogo */ showLogoApp ? "hide-logo" : ""}>Shopping cart</h2>
                    <div className="right-nav">
                        <div className="email-menu">
                            <div onClick={handleMenuNav} className="email-menu__front">
                                <span className="email-menu__text">stivenb1994@gmail.com</span>
                                <img className="arrow-down-icon" src="../assets/icons/arrow-down.svg" alt="arrow down image" />
                            </div>
                            <div id="js-menu-nav" className={`email-menu__list ${showNav ? "show-section" : ""}` }>
                                <ul className="email-list-ul">
                                    <li className="email-list-ul__item"><a className="style-no-link" href="./my-orders.html">My orders</a></li>
                                    <li className="email-list-ul__item"><a className="style-no-link" href="./my-account.html">My account</a></li>
                                    <a href="../" className="email-list-ul__item menu-tab__logging">Sign out</a>
                                </ul>
                            </div>
                        </div>
                        <div id="js-counter-circle" className="counter-circle">0</div>
                        <img className="shopping-cart" onClick={showShoppingCard} src="../assets/icons/shopping-cart.svg" alt="icon of a shopping cart" />
                    </div>
                </div>
            </nav>
            <div className="search-wrapper">
                <div className="general-input center-search search-home-section" style={{ left: searchLeftPosition }}>
                    <img className="search-home-icon search-icon" src="../assets/icons/search-icon.svg" alt="search icon" />
                    <input id="search-input" onKeyUp={searchHandler} className="header-home-section__search" type="text" placeholder="Search product" />
                    <img id="js-clean-search" onClick={cleanSearchInput} className="search-home-icon clean-search" src="../assets/icons/x-icon.svg" alt="close icon" />
                </div>
                <span className="header-home-section__text hide-section">Order:</span> 
                <select className="header-home-section__order hide-section">
                    <option selected value="mostRecent">Most recent</option>
                    <option value="mostBought">Most popular</option>
                    <option value="ascendentOrder">Ascendent order</option>
                </select>
            </div>
            <ul id="home-nav-mobile" className="header-home-section__list">
                <li id="js-all-mobile" onClick={handleHomeList} className="header-home-section__list-option selected-item-mobile">All</li>
                <li id="js-clothes-mobile" onClick={handleHomeList} className="header-home-section__list-option">Clothes</li>
                <li id="js-electronics-mobile" onClick={handleHomeList} className="header-home-section__list-option">Electronics</li>
                <li id="js-furnitures-mobile" onClick={handleHomeList} className="header-home-section__list-option">Furnitures</li>
                <li id="js-toys-mobile" onClick={handleHomeList} className="header-home-section__list-option">Toys</li>
                <li id="js-others-mobile" onClick={handleHomeList} className="header-home-section__list-option">Others</li>
            </ul>
        </header>
    );
}

export { Header };